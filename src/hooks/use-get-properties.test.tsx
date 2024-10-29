import useGetProperties from "./use-get-properties";
import Data from "../../properties.json";
import { act, renderHook } from "@/testUtils";

describe("useGetProperties", () => {
  it("returns initial data", () => {
    const { result } = renderHook(() => useGetProperties());

    expect(result.current.data).toEqual(Data.items);
  });

  it("filters data based on search parameter", () => {
    const { result } = renderHook(() => useGetProperties());

    act(() => {
      result.current.searchProperty("someProperty");
    });

    const expectedResults = Data.items.filter((item) =>
      new RegExp("someProperty", "i").test(item.name)
    );
    expect(result.current.data).toEqual(expectedResults);
  });

  it("clears search and returns all items", () => {
    const { result } = renderHook(() => useGetProperties());

    act(() => {
      result.current.searchProperty("someProperty");
    });

    act(() => {
      result.current.clearSearch();
    });

    expect(result.current.data).toEqual(Data.items);
  });
});
