import BoundingBox from './ref/BoundingBox.js';
import Polygon from './Polygon.js';

export default {
  title: 'GeoJSON Rectangle',
  type: 'object',
  required: ['type', 'properties', 'geometry'],
  properties: {
    type: {
      type: 'string',
      enum: ['Feature'],
    },
    id: {
      oneOf: [{ type: 'number' }, { type: 'string' }],
    },
    properties: {
      required: ['subType'],
      properties: {
        subType: {
            type: 'string',
            enum: ['Rectangle'],
          },
      }
    },
    geometry: {
      oneOf: [
        Polygon,
      ]
    },
    bbox: BoundingBox,
  },
};
