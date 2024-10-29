import { Position } from "geojson";

export type Data = {
  id: string;
  name: string;
  projects: object[];
  map_data: {
    geometry: {
      coordinates: Position[][];
    };
  };
}[];
