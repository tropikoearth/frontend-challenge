/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";

import mapboxgl from "mapbox-gl";
import { calculateCenterMapBox } from "@/utils/functions";

import { useMapBoxContext } from "@/contexts/map-box-context";

const mapStyle = "mapbox://styles/mapbox/streets-v12";

const MapBox = () => {
  const [mapBox, setMapBox] = useState<any | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const { coordinates } = useMapBoxContext();

  useEffect(() => {
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: mapStyle,
        center: [-46.6860811, -23.5602868],
        zoom: 9,
        maxZoom: 15,
      });

      setMapBox(map);
    }
  }, []);

  const updatePolygon = useCallback(() => {
    if (!mapBox || !coordinates) return;

    if (mapBox.getSource("polygonData")) {
      mapBox.removeLayer("polygonLayer");
      mapBox.removeLayer("polygonOutline");
      mapBox.removeSource("polygonData");
    }

    mapBox.addSource("polygonData", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates,
        },
      },
    });

    mapBox.addLayer({
      id: "polygonLayer",
      type: "fill",
      source: "polygonData",
      paint: {
        "fill-color": "#7159c1",
        "fill-opacity": 0.5,
      },
    });

    mapBox.addLayer({
      id: "polygonOutline",
      type: "line",
      source: "polygonData",
      paint: {
        "line-color": "#000000",
        "line-width": 2,
      },
    });
  }, [mapBox, coordinates]);

  const handleFlyTo = useCallback(() => {
    if (!mapBox || !coordinates) return;

    const centerCoordinates = calculateCenterMapBox(coordinates);

    mapBox.flyTo({
      center: centerCoordinates,
      zoom: 12,
      essential: true,
    });

    updatePolygon();
  }, [mapBox, coordinates, updatePolygon]);

  useEffect(() => {
    if (mapBox) {
      handleFlyTo();
    }
  }, [coordinates, handleFlyTo, mapBox]);

  return (
    <div
      ref={mapContainer}
      style={{
        top: "150px",
        left: "270px",
        position: "absolute",
        bottom: 0,
        width: "85%",
        height: "70%",
      }}
    />
  );
};

export default MapBox;
