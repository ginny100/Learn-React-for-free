const url = require('url')
const qs = require('qs')

const { ParameterError, NotFoundError } = require('./errors')

const { Store, Presenter } = require('yayson')()
const store = new Store()

const presenters = require('./presenters')

module.exports = function ({ apiKey, fetch, apiHost, apiProtocol } = {}) {
  const httpRequest = async function (method, options) {
    let { path, json, filter, include, sort, page, raw, type } = options

    const API_HOST =
      options.apiHost ||
      apiHost ||
      process.env.API_HOST ||
      'api.confetti.events'

    const API_PROTOCOL =
      options.apiProtocol || apiProtocol || process.env.API_PROTOCOL || 'https'

    let API_KEY = options.apiKey || apiKey
    let fetchLib = options.fetch || fetch

    if (!fetchLib) {
      fetchLib = require('node-fetch')
    }
    if (!API_KEY) {
      throw new Error('missing_api_key')
    }
    if (Array.isArray(include)) {
      include = encodeURI(include.join(','))
    }

    const httpOptions = {
      method,
      timeout: method === 'get' ? 5000 : 15000,
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    }
    const fetchUrl = url.format({
      host: API_HOST,
      protocol: API_PROTOCOL,
      pathname: path,
      search: qs.stringify({ filter, sort, page, include }),
    })
    if (json) {
      httpOptions.body = JSON.stringify(presenters[type].render(json))
    }

    const res = await fetchLib(fetchUrl, httpOptions)

    if (res.status >= 200 && res.status < 299) {
      const contentType = res.headers.get('content-type') || ''
      if (contentType.includes('application/json')) {
        const body = await res.json()
        if (raw) {
          return body
        } else {
          return store.sync(body)
        }
      } else {
        return await res.text()
      }
    } else {
      let errorBody
      if (res.status >= 400 && res.status < 499) {
        const contentType = res.headers.get('content-type') || ''
        if (contentType.includes('application/json')) {
          errorBody = await res.json()
        } else {
          errorBody = await res.text()
        }
      }
      if (res.status == 400) {
        throw new ParameterError('validation', errorBody)
      } else if (res.status == 404) {
        throw new NotFoundError(errorBody.message || 'object', errorBody)
      } else {
        throw new Error()
      }
    }
  }

  const adapter = {
    async put(options) {
      return await httpRequest('put', options)
    },

    async post(options) {
      return await httpRequest('post', options)
    },

    async get(options) {
      return await httpRequest('get', options)
    },

    async delete(options) {
      return await httpRequest('delete', options)
    },
  }

  return adapter
}
