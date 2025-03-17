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
      oneOf: [{type: 'number'}, {type: 'string'}],
    },
    properties: {
      type: 'object',
      required: ['subType'],
      properties: {
        subType: {
          type: 'string',
          enum: ['Rectangle'],
        },
      },
    },
    geometry: Polygon,
    bbox: BoundingBox,
  },
};
