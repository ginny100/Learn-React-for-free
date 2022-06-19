module.exports = function ({ samples }) {
  return {
    key: 'image',
    name: 'Image',
    endpoint: 'images',
    sample: samples.image,
    attributes: [
      {
        key: 'id',
        label: 'ID',
        description: 'Identifier of the category.',
        type: 'number',
      },
      { key: 'type', label: 'Type', type: 'string' },
      { key: 'order', label: 'Order', type: 'string' },

      { key: 'original', label: 'Original', type: 'string' },
      { key: 'url30', label: 'Url30', type: 'string' },
      { key: 'url50', label: 'Url50', type: 'string' },
      { key: 'url75', label: 'Url75', type: 'string' },
      { key: 'url100', label: 'Url100', type: 'string' },
      { key: 'url300', label: 'Url300', type: 'string' },
      { key: 'url500', label: 'Url500', type: 'string' },
      { key: 'url500x500', label: 'Url500x500', type: 'string' },
      { key: 'url1000', label: 'Url1000', type: 'string' },
      { key: 'url2000', label: 'Url2000', type: 'string' },
      { key: 'urlMax2000', label: 'UrlMax2000', type: 'string' },

      { key: 'title', label: 'Title', type: 'string' },
      { key: 'description', label: 'Description', type: 'string' },
      { key: 'link', label: 'Link', type: 'string' },
    ],
    filters: {},
  }
}
