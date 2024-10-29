import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";

type ProvidersProps = {
  children: ReactNode;
};

const AllTheProviders = ({ children }: ProvidersProps) => {
  return children;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
