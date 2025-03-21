import BoundingBox from './ref/BoundingBox.js';
import GeometryCollection from './GeometryCollection.js';
import LineString from './LineString.js';
import MultiLineString from './MultiLineString.js';
import MultiPoint from './MultiPoint.js';
import MultiPolygon from './MultiPolygon.js';
import Point from './Point.js';
import Polygon from './Polygon.js';

export default {
  title: 'GeoJSON Feature',
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
      required: ['path_class_name'],
      properties: {
        path_class_name: {
          type: 'string',
        },
      },
    },
    geometry: {
      oneOf: [
        {type: 'null'},
        Point,
        LineString,
        Polygon,
        MultiPoint,
        MultiLineString,
        MultiPolygon,
        GeometryCollection,
      ],
    },
    bbox: BoundingBox,
  },
};
