export default {
    title: 'JSON Ontology',
    type: 'object',
    // As we do not know key names in advance we cannot use `properties`
    additionalProperties: {
      type: 'array',
      items: {
        type: 'object',
        required: ['type', 'color'],
        properties: {
          type: {
            type: 'string',
          },
          color: {
            type: 'string',
            pattern: '^#[0-9A-Fa-f]{6}$', // Ensure color is a valid hex code
          },
        },
        additionalProperties: false, // No additional properties allowed within objects
      },
    },
  };
  