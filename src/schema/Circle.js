import BoundingBox from './ref/BoundingBox.js';
import Point from './Point.js';

export default {
  title: 'GeoJSON Circle',
  type: 'object',
  required: ['type', 'properties', 'geometry'],
  properties: {
    type: {
      type: 'string',
      enum: ['Feature'],
    },
    id: {
      oneOf: [{type: 'number'}, {type: 'string'}],
    },
    properties: {
      required: ['subType', 'radius'],
      properties: {
        subType: {
          type: 'string',
          enum: ['Circle'],
        },
        radius: {
          type: 'number',
        },
      },
    },
    geometry: {
      oneOf: [
        Point,
      ]
    },
    bbox: BoundingBox,
  },
};
