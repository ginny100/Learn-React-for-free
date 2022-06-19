module.exports = function ({ samples }) {
  return {
    key: 'category',
    name: 'Category',
    endpoint: 'categories',
    sample: samples.category,
    attributes: [
      {
        key: 'id',
        label: 'ID',
        description: 'Identifier of the category.',
        type: 'number',
      },
      {
        key: 'name',
        label: 'Name',
        description: 'Category name.',
        type: 'string',
      },
    ],
    filters: {},
  }
}
