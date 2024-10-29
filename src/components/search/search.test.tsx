import { render, screen, fireEvent } from "@/testUtils";
import Search from "./search";

jest.mock("mapbox-gl");

describe("Search Component", () => {
  const mockHandleChange = jest.fn();
  const mockHandleSearch = jest.fn();
  const mockHandleClearInput = jest.fn();

  const setup = (value = "") => {
    render(
      <Search
        value={value}
        handleChange={mockHandleChange}
        handleSearch={mockHandleSearch}
        handleClearInput={mockHandleClearInput}
      />
    );
  };

  it("renders the search input", () => {
    setup();
    const input = screen.getByPlaceholderText(
      "Procurar o nome de uma propriedade"
    );
    expect(input).toBeInTheDocument();
  });

  it("calls handleChange when input value changes", () => {
    setup();
    const input = screen.getByPlaceholderText(
      "Procurar o nome de uma propriedade"
    );
    fireEvent.change(input, { target: { value: "Propriedade 1" } });
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });

  it("calls handleSearch on key up", () => {
    setup();
    const input = screen.getByPlaceholderText(
      "Procurar o nome de uma propriedade"
    );
    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });
    expect(mockHandleSearch).toHaveBeenCalledTimes(1);
  });

  it("renders the cancel icon when there is a value", () => {
    setup("Propriedade 1");
    const cancelIcon = screen.getByAltText("Limpar pesquisa");
    expect(cancelIcon).toBeInTheDocument();
  });

  it("calls handleClearInput when cancel icon is clicked", () => {
    setup("Propriedade 1");
    const cancelIcon = screen.getByAltText("Limpar pesquisa");
    fireEvent.click(cancelIcon);
    expect(mockHandleClearInput).toHaveBeenCalledTimes(1);
  });

  it("does not render the cancel icon when the input is empty", () => {
    setup();
    const cancelIcon = screen.queryByAltText("Limpar pesquisa");
    expect(cancelIcon).not.toBeInTheDocument();
  });
});
