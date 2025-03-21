import BoundingBox from './ref/BoundingBox.js';
import Feature from './Feature.js';

export default {
  title: 'GeoJSON FeatureCollection',
  type: 'object',
  required: ['type', 'features', 'ontology_link', 'ontology_id'],
  properties: {
    type: {
      type: 'string',
      enum: ['FeatureCollection'],
    },
    features: {
      type: 'array',
      items: Feature,
    },
    bbox: BoundingBox,
    ontology_link: {
      type: 'string',
    },
    ontology_id: {
      type: 'string',
    },
  },
};
