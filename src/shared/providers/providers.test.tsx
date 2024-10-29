import React from "react";
import { render } from "@testing-library/react";
import Providers from "./providers";

describe("Providers Component", () => {
  it("renders children within the context providers", () => {
    const { getByText } = render(
      <Providers>
        <div>Test Child Content</div>
      </Providers>
    );

    expect(getByText("Test Child Content")).toBeInTheDocument();
  });
});
