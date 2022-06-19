module.exports = function ({ samples }) {
  return {
    key: 'webhook',
    name: 'Webhook',
    endpoint: 'webhooks',
    sample: samples.webhook,
    attributes: [
      {
        key: 'id',
        label: 'ID',
        description: 'Identifier of the ticket.',
        type: 'number',
      },
      { key: 'type', label: 'Id', type: 'string' },
      { key: 'url', label: 'URL', type: 'string' },
      { key: 'provider', label: 'Provider', type: 'string' },
      { key: 'status', label: 'Status', type: 'string' },
      { key: 'createdAt', label: 'Created At', type: 'date' },
      { key: 'updatedAt', label: 'Updated At', type: 'date' },
    ],
    filters: {
      eventId: {
        type: 'number',
        default: '',
      },
    },
  }
}
