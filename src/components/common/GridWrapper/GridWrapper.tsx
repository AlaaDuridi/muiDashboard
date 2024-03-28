import React from "react";
import Grid from "@mui/material/Grid";
import { gridWrapperStyles } from "./styles.ts";
const GridWrapper = ({ children }: GridWrapperProps) => {
  return (
    <Grid item xs={12} sx={gridWrapperStyles}>
      {children}
    </Grid>
  );
};

interface GridWrapperProps {
  children: React.ReactNode;
}

export default GridWrapper;
