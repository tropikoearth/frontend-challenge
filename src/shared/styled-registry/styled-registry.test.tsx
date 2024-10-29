import React from "react";
import { render } from "@testing-library/react";
import StyledComponentsRegistry from "./styled-registry";
import { ServerStyleSheet } from "styled-components";

describe("StyledComponentsRegistry", () => {
  it("renders children on the client", () => {
    const { getByText } = render(
      <StyledComponentsRegistry>
        <div>Test Child</div>
      </StyledComponentsRegistry>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("renders children on the server", () => {
    const sheet = new ServerStyleSheet();

    const { getByText } = render(
      <StyledComponentsRegistry>
        <div>Server Rendered Child</div>
      </StyledComponentsRegistry>,
      { wrapper: ({ children }) => sheet.collectStyles(<>{children}</>) }
    );

    expect(getByText("Server Rendered Child")).toBeInTheDocument();

    const styleTags = sheet.getStyleTags();
    expect(styleTags).toBeDefined();
  });
});
