import Circle from './Circle.js';
import Feature from './Feature.js';
import FeatureCollection from './FeatureCollection.js';
import GeometryCollection from './GeometryCollection.js';
import LineString from './LineString.js';
import MultiLineString from './MultiLineString.js';
import MultiPoint from './MultiPoint.js';
import MultiPolygon from './MultiPolygon.js';
import Point from './Point.js';
import Polygon from './Polygon.js';
import Rectangle from './Rectangle.js';

export default {
  title: 'GeoJSON_BP',
  oneOf: [
    Point,
    LineString,
    Polygon,
    MultiPoint,
    MultiLineString,
    MultiPolygon,
    GeometryCollection,
    Feature,
    FeatureCollection,
    Circle,
    Rectangle,
  ],
};
