"use client";

import { GlobalStyles } from "@/shared/styled-registry/globalStyles";
import { ReactNode } from "react";
import { StyledRegistry } from "../styled-registry";
import SearchContextProvider from "@/contexts/search-context";
import MapBoxContextProvider from "@/contexts/map-box-context";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <div className="main">
      <GlobalStyles />
      <StyledRegistry>
        <SearchContextProvider>
          <MapBoxContextProvider>{children}</MapBoxContextProvider>
        </SearchContextProvider>
      </StyledRegistry>
    </div>
  );
};

export default Providers;
