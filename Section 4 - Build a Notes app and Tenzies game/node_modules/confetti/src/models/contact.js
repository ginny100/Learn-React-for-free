module.exports = function ({ samples }) {
  return {
    key: 'contact',
    endpoint: 'contacts',
    name: 'Contact',
    sample: samples.contact,
    attributes: [
      {
        key: 'id',
        label: 'ID',
        description: 'Identifier of the contact.',
        type: 'number',
      },
      { key: 'firstName', label: 'First Name', type: 'string' },
      { key: 'lastName', label: 'Last Name', type: 'string' },
      { key: 'email', label: 'Email', type: 'string' },
      { key: 'phone', label: 'Phone', type: 'string' },
      { key: 'token', label: 'Token', type: 'string' },
      { key: 'status', label: 'Status', type: 'string' },
      { key: 'comment', label: 'Comment', type: 'string' },

      { key: 'lastSeen', label: 'Last Seen', type: 'date' },
      {
        key: 'deletionRequestedAt',
        label: 'Deletion Requested At',
        type: 'date',
      },
      { key: 'createdAt', label: 'Created At', type: 'date' },
      { key: 'updatedAt', label: 'Updated At', type: 'date' },
      { key: 'organisationId', label: 'Organisation Id', type: 'number' },
    ],
    sorting: [],
    filters: {},
    webhooks: [
      {
        type: 'contact.created',
        label: 'Created',
        description: 'Triggers when a contacts is created.',
        important: true,
      },
      {
        type: 'contact.updated',
        label: 'Updated',
        description: 'Triggers a contact is updated.',
        important: true,
      },
      {
        type: 'contact.unsubscribed',
        label: 'Unsubscribed',
        description: 'Triggers when a contact is unsubscribed.',
      },
      {
        type: 'contact.deletion-requested',
        label: 'Deletion Requested',
        description: 'Triggers when someone has requested to be deleted.',
      },
      {
        type: 'contact.deleted',
        label: 'Deleted',
        description: 'Triggers a contact is deleted.',
      },
    ],
  }
}
