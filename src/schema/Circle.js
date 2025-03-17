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
      type: 'object',
      required: ['subType', 'radius'],
      properties: {
        subType: {
          type: 'string',
          enum: ['Circle'],
        },
        radius: {
          type: 'number',
          minimum: 0,
        },
      },
    },
    geometry: Point,
    bbox: BoundingBox,
  },
};
