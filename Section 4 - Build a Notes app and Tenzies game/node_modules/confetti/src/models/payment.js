module.exports = function ({ samples }) {
  return {
    key: 'payment',
    endpoint: 'payments',
    name: 'Payment',
    sample: samples.payment,
    attributes: [
      {
        key: 'id',
        label: 'ID',
        description: 'Identifier of the ticket.',
        type: 'number',
      },
      { key: 'name', label: 'Name', type: 'string' },
      { key: 'email', label: 'Email', type: 'string' },

      { key: 'company', label: 'Company', type: 'string' },
      { key: 'amount', label: 'Amount', type: 'number' },
      { key: 'vat', label: 'VAT', type: 'number' },
      { key: 'vatPercentage', label: 'Vat %', type: 'number' },

      { key: 'token', label: 'Token', type: 'string' },
      { key: 'currency', label: 'Currency', type: 'string' },
      { key: 'status', label: 'Status', type: 'string' },

      { key: 'paidAt', label: 'Paid At', type: 'date' },
      { key: 'commission', label: 'Commission', type: 'number' },
      { key: 'commissionVat', label: 'Commission VAT', type: 'date' },
      { key: 'customer', label: 'Customer information', type: 'object' },
    ],
    filters: {
      eventId: {
        type: 'number',
        required: true,
        default: '',
      },
      status: {
        type: 'array',
        default: [
          'paid',
          'refunded',
          'pending-invoice',
          'sent-invoice',
          'paid-invoice',
          'cancelled-invoice',
        ],
        values: [
          {
            key: 'paid',
            value: 'paid',
            label: 'Paid',
            type: 'string',
          },
          {
            key: 'refunded',
            value: 'refunded',
            label: 'Refunded',
            type: 'string',
          },
          {
            key: 'pendingInvoice',
            value: 'pending-invoice',
            label: 'Pending Invoice',
            type: 'string',
          },
          {
            key: 'sentInvoice',
            value: 'sent-invoice',
            label: 'Sent Invoice',
            type: 'string',
          },
          {
            key: 'paidInvoice',
            value: 'paid-invoice',
            label: 'Paid Invoice',
            type: 'string',
          },
          {
            key: 'cancelledInvoice',
            value: 'cancelled-invoice',
            label: 'Cancelled Invoice',
            type: 'string',
          },
        ],
      },
    },
    webhooks: [
      {
        type: 'payment.paid',
        label: 'Paid',
        description: 'Triggers when a payment is paid.',
      },
      {
        type: 'payment.refunded',
        label: 'Refunded',
        description: 'Triggers when a payment is refunded.',
      },
    ],
  }
}
