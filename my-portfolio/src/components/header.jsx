import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  CssBaseline,
  useScrollTrigger,
  Fade,
  Fab,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import RocketIcon from "@mui/icons-material/Rocket";
import "../styles/header.css";
import { Tooltip } from "@mui/material";
import { useState, useEffect } from "react";

// Bottom of page hook
function useAtBottomOfPage() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const buffer = 70;
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - buffer;
      setIsBottom(isBottom);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isBottom;
}

// ScrollTop component
function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const isBottom = useAtBottomOfPage();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger && !isBottom}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 40,
          right: 145,
          zIndex: 1000,
          "@media (max-width:1024px)": {
            bottom: 35,
            right: 100,
          },
          "@media (max-width:768px)": {
            bottom: 25,
            right: 40,
          },
          "@media (max-width:375px)": {
            bottom: 25,
            right: 30,
          },
        }}
      >
        <Tooltip title="Beam me up, Scotty!" arrow>
          {children}
        </Tooltip>{" "}
      </Box>
    </Fade>
  );
}

// HideOnScroll component
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ threshold: 100 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { aboutRef, passionRef, experienceRef, workRef, contactRef } = props;
  const pageRefs = {
    About: aboutRef,
    Passion: passionRef,
    Experience: experienceRef,
    Projects: workRef,
    Contact: contactRef,
  };
  const handlePageClick = (page) => {
    setTimeout(() => {
      pageRefs[page].current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const pages = ["About", "Passion", "Experience", "Projects", "Contact"];
  return (
    <StyledEngineProvider injectFirst>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar elevation={0}>
            <Container maxWidth="lg" sx={{ backgroundColor: "black" }}>
              <Toolbar disableGutters>
                <DeveloperModeIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: "33px" }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: { xs: 1, md: 2 },
                    display: { xs: "none", md: "flex" },
                    color: "inherit",
                    fontWeight: 700,
                    fontSize: { xs: "18px", md: "20px" },
                    textTransform: "uppercase",
                    fontFamily: "Lato, sans-serif",
                    textDecoration: "none",
                    letterSpacing: ".07rem",
                    "&:hover": {
                      color: "lightgrey",
                    },
                  }}
                >
                  Thong Ho
                </Typography>
                {/* Tablet size */}
                <DeveloperModeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "Lato",
                    fontWeight: 500,
                    fontSize: { xs: "26px", md: "30px" },
                    letterSpacing: ".05rem",
                    color: "inherit",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  Thong Ho
                </Typography>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon fontSize="lg" />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      width: "100%",
                      display: { xs: "block", md: "none" },
                    }}
                    className="header_Menu_Container"
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleCloseNavMenu();
                          handlePageClick(page);
                        }}
                        sx={{
                          width: "100vw",
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "black",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "black",
                            color: "lightgrey",
                          },
                        }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box
                  sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "end" } }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={() => {
                        handlePageClick(page);
                      }}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "flex",
                        fontFamily: "Lato",
                        fontWeight: 700,
                        fontSize: { md: "16px", lg: "18px" },
                        mx: { md: 0.5, lg: 1 },
                        "&:hover": {
                          backgroundColor: "black",
                          color: "lightgrey",
                        },
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...props}>
          <Fab
            size="small"
            aria-label="scroll back to top"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              color: "white",
              width: "48px",
              height: "48px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 1)",
                color: "white",
              },
              "@media (max-width:575px)": {
                width: "43px",
                height: "43px",
              },
            }}
          >
            <RocketIcon
              sx={{
                padding: " 2px",
                fontSize: "38px",
                "@media (max-width:575px)": {
                  fontSize: "32px",
                },
              }}
            />
          </Fab>
        </ScrollTop>{" "}
      </React.Fragment>
    </StyledEngineProvider>
  );
}
export default Header;
