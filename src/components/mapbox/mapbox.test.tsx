import { useMapBoxContext } from "@/contexts/map-box-context";
import MapBox from "./mapbox";
import mapboxgl from "mapbox-gl";
import { render } from "@/testUtils";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn().mockImplementation(() => ({
    flyTo: jest.fn(),
    addSource: jest.fn(),
    addLayer: jest.fn(),
    removeLayer: jest.fn(),
    removeSource: jest.fn(),
    getSource: jest.fn().mockReturnValue(true),
  })),
  accessToken: "",
}));

jest.mock("../../contexts/map-box-context", () => ({
  useMapBoxContext: jest.fn().mockReturnValue({
    coordinates: [[]],
    setCoordinates: () => jest.fn(),
  }),
}));

describe("MapBox Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useMapBoxContext as jest.Mock).mockReturnValue({ coordinates: null });
  });

  it("renders the map container", () => {
    render(<MapBox />);
    const mapContainer = document.querySelector("div[style]");
    expect(mapContainer).toBeInTheDocument();
  });

  it("initializes the map on mount", () => {
    render(<MapBox />);
    expect(mapboxgl.Map).toHaveBeenCalledTimes(1);
  });
});
