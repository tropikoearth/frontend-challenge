"use client";

import { GlobalStyles } from "@/shared/styled-registry/globalStyles";
import { ReactNode } from "react";
import { StyledRegistry } from "../styled-registry";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <div className="main">
      <GlobalStyles />
      <StyledRegistry>{children}</StyledRegistry>
    </div>
  );
};

export default Providers;
