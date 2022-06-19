module.exports = function ({ samples }) {
  return {
    key: 'page',
    endpoint: 'pages',
    name: 'Page',
    sample: samples.page,
    attributes: [
      { key: 'id', label: 'ID', type: 'number' },
      { key: 'name', label: 'Name', type: 'string' },
      { key: 'slug', label: 'Slug', type: 'string' },
      { key: 'order', label: 'Order', type: 'number' },
      { key: 'settings', label: 'Settings', type: 'object' },
    ],
    filters: {},
    webhooks: [],
  }
}
