module.exports = function ({ samples }) {
  return {
    key: 'workspace',
    name: 'Workspace',
    endpoint: 'workspaces',
    sample: samples.workspace,
    attributes: [
      {
        key: 'id',
        label: 'ID',
        description: 'Identifier of the workspace.',
        type: 'number',
      },
      {
        key: 'name',
        label: 'Name',
        description: 'Workspace name.',
        type: 'string',
      },
      { key: 'timeZone', label: 'Time Zone', type: 'string' },
      { key: 'slug', label: 'Slug', type: 'string' },
      { key: 'featureLevel', label: 'Feature Level', type: 'string' },
      { key: 'website', label: 'Website', type: 'string' },
      { key: 'email', label: 'Email', type: 'string' },
      { key: 'createdAt', label: 'Created At', type: 'date' },
      { key: 'updatedAt', label: 'Updated At', type: 'date' },

      { key: 'shareTitle', label: 'ShareTitle', type: 'string' },
      { key: 'shareDescription', label: 'Share description', type: 'string' },
      { key: 'summary', label: 'Summary', type: 'string' },
      { key: 'primaryColor', label: 'Primary color', type: 'string' },
    ],
    filters: {},
  }
}
