import List from "./list";
import { Data } from "@/features/properties/types";
import { render, screen } from "@/testUtils";

jest.mock("../../contexts/map-box-context", () => ({
  useMapBoxContext: jest.fn().mockReturnValue({
    coordinates: [[]],
    setCoordinates: () => jest.fn(),
  }),
}));

jest.mock(".", () => ({
  getSubtitle: jest.fn((count) => (count === 1 ? "project" : "projects")),
}));

describe("List Component", () => {
  it("renders list of properties when data is provided", () => {
    const mockData: Data = [
      {
        id: "1",
        name: "Property 1",
        map_data: {
          geometry: {
            coordinates: [[[20.0, 85.0]]],
          },
        },
        projects: [],
      },
      {
        id: "2",
        name: "Property 2",
        map_data: {
          geometry: {
            coordinates: [[[50.0, 85.0]]],
          },
        },
        projects: [],
      },
    ];

    render(<List data={mockData} />);

    expect(screen.getByText("Lista de propriedades")).toBeInTheDocument();
    expect(screen.getByText("Property 1")).toBeInTheDocument();
    expect(screen.getByText("Property 2")).toBeInTheDocument();
  });

  it("renders 'no properties found' message when data is empty", () => {
    render(<List data={[]} />);

    expect(
      screen.getByText("Nenhuma propriedade encontrada com esses termos.")
    ).toBeInTheDocument();
  });
});
