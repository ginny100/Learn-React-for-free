const { Presenter } = require('yayson')()
const presenters = {}

const WebhookPresenter = require('./webhook')({ presenters, Presenter })
const EventPresenter = require('./event')({ presenters, Presenter })
const WorkspacePresenter = require('./workspace')({ presenters, Presenter })

presenters.WebhookPresenter = WebhookPresenter
presenters.EventPresenter = EventPresenter
presenters.WorkspacePresenter = WorkspacePresenter

module.exports = {
  webhooks: WebhookPresenter,
  events: EventPresenter,
  workspaces: WorkspacePresenter,
}
