module.exports = function ({ presenters, Presenter }) {
  class WorkspacePresenter extends Presenter {}
  WorkspacePresenter.prototype.type = 'workspace'
  return WorkspacePresenter
}
