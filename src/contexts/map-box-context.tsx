import { createContext, ReactNode, useContext, useState } from "react";
import { Position } from "geojson";

type MapBoxContextValue = {
  coordinates: Position[][] | null;
  setCoordinates: (coordinates: Position[][]) => void;
};

export const InitialMapBoxContext = createContext<MapBoxContextValue>(
  {} as MapBoxContextValue
);

export const useMapBoxContext = (): MapBoxContextValue =>
  useContext(InitialMapBoxContext);

interface SearchStateContextProviderProps {
  children: ReactNode;
  value?: MapBoxContextValue;
}

const MapBoxContextProvider = ({
  children,
}: SearchStateContextProviderProps) => {
  const [coordinates, setCoordinates] = useState<
    MapBoxContextValue["coordinates"] | null
  >(null);

  return (
    <InitialMapBoxContext.Provider
      value={{
        coordinates,
        setCoordinates,
      }}
    >
      {children}
    </InitialMapBoxContext.Provider>
  );
};

export default MapBoxContextProvider;
