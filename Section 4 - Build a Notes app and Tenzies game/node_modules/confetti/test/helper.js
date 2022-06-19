const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const fetchMock = require('fetch-mock')

chai.use(chaiAsPromised)
chai.use(sinonChai)

const fetch = fetchMock.sandbox()

module.exports = {
  expect: chai.expect,
  sinon,
  fetch,
}
