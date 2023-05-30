import * as React from "react";
import { Container, Box } from "@mui/material";

function AboutPage({ aboutRef }) {
  return (
    <div ref={aboutRef} style={{ height: "100vh" }}>
      <Box
        sx={{
          my: 2,
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          color: "black",
        }}
      >
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </Box>
    </div>
  );
}

export default AboutPage;
