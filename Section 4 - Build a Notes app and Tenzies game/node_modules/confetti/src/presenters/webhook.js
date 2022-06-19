module.exports = function ({ presenters, Presenter }) {
  class WebhookPresenter extends Presenter {
    attributes(webhook) {
      if (webhook.eventId) {
        webhook.event = {
          id: webhook.eventId,
        }
        delete webhook.eventId
      }
      if (webhook.workspaceId) {
        webhook.workspace = {
          id: webhook.workspaceId,
        }
        delete webhook.workspaceId
      }
      const s = super.attributes(webhook)
      return s
    }
    relationships() {
      return {
        event: presenters.EventPresenter,
        workspace: presenters.WorkspacePresenter,
      }
    }
  }
  WebhookPresenter.prototype.type = 'webhook'
  return WebhookPresenter
}
