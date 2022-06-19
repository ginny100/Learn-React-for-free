module.exports = function ({ samples }) {
  return {
    key: 'block',
    endpoint: 'blocks',
    name: 'Block',
    sample: samples.block,
    attributes: [
      { key: 'id', label: 'ID', type: 'number' },
      { key: 'type', label: 'Type', type: 'string' },
      { key: 'status', label: 'Status', type: 'string' },
      { key: 'order', label: 'Order', type: 'number' },
      { key: 'content', label: 'Content', type: 'object' },
    ],
    filters: {},
    webhooks: [],
  }
}
