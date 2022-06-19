const { expect } = require('../helper')
const { events, webhooks, workspaces } = require('../../src/presenters')

describe('Presenters', function () {
  it('should present a webhook with relation ids', function () {
    const webhook = webhooks.render({
      type: 'ticket.attending',
      url: 'https://hooks.zapier.com/hooks/standard/1337/',
      provider: 'zapier',
      workspaceId: 57,
      eventId: 2,
    })
    expect(webhook).to.deep.equal({
      data: {
        type: 'webhook',
        attributes: {
          type: 'ticket.attending',
          url: 'https://hooks.zapier.com/hooks/standard/1337/',
          provider: 'zapier',
        },
        relationships: {
          event: { data: { id: '2', type: 'event' } },
          workspace: { data: { id: '57', type: 'workspace' } },
        },
      },
      included: [
        { id: '2', type: 'event', attributes: {} },
        { id: '57', type: 'workspace', attributes: {} },
      ],
    })
  })
  it('should present a webhook without eventId', function () {
    const webhook = webhooks.render({
      type: 'ticket.attending',
      url: 'https://hooks.zapier.com/hooks/standard/1337/',
      provider: 'zapier',
      workspaceId: 57,
    })
    expect(webhook).to.deep.equal({
      data: {
        type: 'webhook',
        attributes: {
          type: 'ticket.attending',
          url: 'https://hooks.zapier.com/hooks/standard/1337/',
          provider: 'zapier',
        },
        relationships: {
          event: { data: null },
          workspace: { data: { id: '57', type: 'workspace' } },
        },
      },
      included: [{ id: '57', type: 'workspace', attributes: {} }],
    })
  })
})
