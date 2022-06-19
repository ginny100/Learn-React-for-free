const Confetti = require('../../src')
const { expect, sinon, fetchData, fetch } = require('../helper')

const confetti = new Confetti({ apiKey: 'my-key', fetch })

describe('Adapter', function () {
  afterEach(() => {
    fetch.restore()
  })

  it('should make a find all request with correct url', async function () {
    fetch.get(/.*\/events/, {})

    await confetti.events.findAll()
    const [url, params] = fetch.calls()[0]

    expect(url).to.equal('https://api.confetti.events/events')
    expect(params).to.deep.equal({
      method: 'get',
      timeout: 5000,
      headers: {
        Authorization: 'apikey my-key',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    })
  })

  it('should make a complicated find all request with correct url', async function () {
    fetch.get(/.*\/events/, {})

    await confetti.events.findAll({
      filter: { workspaceId: 10 },
      include: ['categories', 'pages.blocks'],
      page: {
        limit: 1,
        offset: 10,
      },
    })
    const [url, params] = fetch.calls()[0]

    expect(url).to.equal(
      'https://api.confetti.events/' +
        encodeURI(
          'events?filter[workspaceId]=10&page[limit]=1&page[offset]=10&include='
        ) +
        encodeURIComponent('categories,pages.blocks')
    )
    expect(params).to.deep.equal({
      method: 'get',
      timeout: 5000,
      headers: {
        Authorization: 'apikey my-key',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    })
  })

  it('should make a find request with correct url', async function () {
    fetch.get('https://api.confetti.events/events/3', {})
    await confetti.events.find(3)
    const [url, params] = fetch.calls()[0]
    expect(url).to.equal('https://api.confetti.events/events/3')
    expect(params).to.deep.equal({
      method: 'get',
      timeout: 5000,
      headers: {
        Authorization: 'apikey my-key',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    })
  })

  it('should make a find request with includes with correct url', async function () {
    fetch.get(/.*\/events/, {})
    await confetti.events.find(3, { include: ['categories', 'pages.blocks'] })
    const [url, params] = fetch.calls()[0]
    expect(url).to.equal(
      'https://api.confetti.events/events/3' +
        encodeURI('?include=') +
        encodeURIComponent('categories,pages.blocks')
    )
    expect(params).to.deep.equal({
      method: 'get',
      timeout: 5000,
      headers: {
        Authorization: 'apikey my-key',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    })
  })

  it('should handle a text response', async function () {
    fetch.get('https://api.confetti.events/events/1', {
      status: 200,
      body: 'foo',
    })
    const res = await confetti.events.find(1)
    expect(res).to.equal('foo')
  })

  it('should handle 404 response', async function () {
    fetch.get('https://api.confetti.events/events/1', {
      status: 404,
      body: {
        message: 'event',
        type: 'event',
        name: 'NotFoundError',
      },
    })
    try {
      const res = await confetti.events.find(1)
      throw new Error('test failed')
    } catch (e) {
      expect(e.name).to.equal('NotFoundError')
      expect(e.message).to.equal('event')
      expect(e.errorType).to.equal('event')
      expect(e.type).to.equal('event')
    }
  })

  it('should handle 400 response', async function () {
    fetch.get('https://api.confetti.events/events/1', {
      status: 400,
      body: {
        message: 'validation',
        type: 'validation',
        name: 'ParameterError',
        fields: {
          name: [
            "Name can't be blank",
            'Name is too short (minimum is 3 characters)',
          ],
          email: ["Email can't be blank", 'Email is not a valid email'],
          terms: ['Terms must be accepted.'],
        },
      },
    })
    try {
      const res = await confetti.events.find(1)
      throw new Error('test failed')
    } catch (e) {
      expect(e.name).to.equal('ParameterError')
      expect(e.message).to.equal('validation')
      expect(e.errorType).to.equal('validation')
      expect(e.type).to.equal('validation')
      expect(e.fields).to.deep.equal({
        name: [
          "Name can't be blank",
          'Name is too short (minimum is 3 characters)',
        ],
        email: ["Email can't be blank", 'Email is not a valid email'],
        terms: ['Terms must be accepted.'],
      })
    }
  })

  it('should handle 500 response', async function () {
    fetch.get('https://api.confetti.events/events/1', {
      status: 500,
      body: {},
    })
    try {
      const res = await confetti.events.find(1)
      throw new Error('test failed')
    } catch (e) {
      expect(e.name).to.equal('Error')
      expect(e.message).to.equal('')
      expect(e.errorType).to.equal(undefined)
      expect(e.type).to.equal(undefined)
    }
  })

  it('should use provided api host and protocol in instance mode if avaliable', async function () {
    fetch.get(/.*\/events/, {})

    const confetti2 = new Confetti({
      apiKey: 'my-key',
      apiHost: 'localhost:3040',
      apiProtocol: 'http',
      fetch,
    })
    await confetti2.events.findAll()
    const [url, params] = fetch.calls()[0]

    expect(url).to.equal('http://localhost:3040/events')
    expect(params).to.deep.equal({
      method: 'get',
      timeout: 5000,
      headers: {
        Authorization: 'apikey my-key',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    })
  })

  it('should use provided api host and protocol in static mode if avaliable', async function () {
    fetch.get(/.*\/events/, {})

    await Confetti.events.findAll({
      apiKey: 'my-key',
      apiHost: 'localhost:3040',
      apiProtocol: 'http',
      fetch,
    })
    const [url, params] = fetch.calls()[0]

    expect(url).to.equal('http://localhost:3040/events')
    expect(params).to.deep.equal({
      method: 'get',
      timeout: 5000,
      headers: {
        Authorization: 'apikey my-key',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    })
  })
})
