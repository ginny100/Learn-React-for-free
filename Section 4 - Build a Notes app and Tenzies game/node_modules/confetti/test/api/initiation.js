const Confetti = require('../../src')
const { expect } = require('../helper')

describe('Initiat', function () {
  it('should initiate a Confetti api instance', function () {
    new Confetti({ key: 'my-key' })
  })

  it('should fail to call due on Confetti api instance due to missing api key', async function () {
    const confetti = new Confetti()
    await expect(confetti.events.findAll()).to.be.rejectedWith(
      'missing_api_key'
    )
  })
})
