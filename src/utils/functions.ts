import { Position } from "geojson";

/**
 * @param polygonCoordinates
 * Calculate coordinates to render the method flyTo based in polygons
 * @returns longitude and latitude
 */

export const calculateCenterMapBox = (
  polygonCoordinates: Position[][]
): [number, number] => {
  let totalHorizontal = 0;
  let totalVertical = 0;
  let totalArea = 0;

  // Extracts the first set of coordinates from the polygon array
  const coordinates = polygonCoordinates[0];
  const numPoints = coordinates.length;

  // Iterates through the polygon points to calculate the area and centroid
  for (let i = 0; i < numPoints - 1; i++) {
    const [x1, y1] = coordinates[i];
    const [x2, y2] = coordinates[i + 1];

    // Calculates the area of the segment between two points
    const segmentArea = x1 * y2 - x2 * y1;
    totalArea += segmentArea;

    // Accumulates the sums needed for the centroid calculation
    totalHorizontal += (x1 + x2) * segmentArea;
    totalVertical += (y1 + y2) * segmentArea;
  }

  // Calculates the total area of the polygon
  totalArea /= 2;

  // Calculates the centroid of the polygon
  const centerX = totalHorizontal / (6 * totalArea);
  const centerY = totalVertical / (6 * totalArea);

  return [centerX, centerY];
};
