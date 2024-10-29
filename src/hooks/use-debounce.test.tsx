import { act, renderHook } from "@/testUtils";
import useDebounce from "./use-debounce";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("should return the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 1500));
    expect(result.current).toBe("initial");
  });

  it("should update the value after the delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "initial value", delay: 1500 } }
    );

    rerender({ value: "new value", delay: 1500 });

    expect(result.current).toBe("initial value");

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(result.current).toBe("new value");
  });

  it("should reset the timer when the value changes before the delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "initial value", delay: 1500 } }
    );

    rerender({ value: "value 1", delay: 1500 });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    rerender({ value: "value 2", delay: 1500 });

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(result.current).toBe("value 2");
  });

  it("should respect the custom delay", () => {
    const customDelay = 2000;
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "test", delay: customDelay } }
    );

    rerender({ value: "updated", delay: customDelay });

    expect(result.current).toBe("test");

    act(() => {
      jest.advanceTimersByTime(customDelay);
    });

    expect(result.current).toBe("updated");
  });
});
