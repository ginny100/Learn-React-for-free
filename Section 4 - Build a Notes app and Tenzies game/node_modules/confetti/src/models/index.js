const samples = require('./samples')()

module.exports = {
  block: require('./block')({ samples }),
  category: require('./category')({ samples }),
  contact: require('./contact')({ samples }),
  event: require('./event')({ samples }),
  image: require('./image')({ samples }),
  page: require('./page')({ samples }),
  payment: require('./payment')({ samples }),
  ticket: require('./ticket')({ samples }),
  webhook: require('./webhook')({ samples }),
  workspace: require('./workspace')({ samples }),
}
