import React, { useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box } from "@mui/system";
import DrawerComp from "./DrawerComp";
// import { useTheme } from "@emotion/react";
const Navbar = ({ links }) => {
  const [tab, setTab] = useState(0);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <AppBar sx={{ backgroundImage: "" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <Grid item xs={2}>
              <Typography>
                <ShoppingCartCheckoutIcon />
              </Typography>
            </Grid>
            <DrawerComp links={links} />
          </>
        ) : (
          <Grid container spacing={1} sx={{ placeItems: "center" }}>
            <Grid item xs={2}>
              <Typography>
                <ShoppingCartCheckoutIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={tab}
                onChange={(eve, val) => setTab(val)}
              >
                {links.map((link, index) => {
                  return <Tab label={link} key={index} />;
                })}
              </Tabs>
            </Grid>
            <Grid items xs={1} />
            <Grid items xs={3}>
              <Box display="flex">
                <Button variant="contained" sx={{ marginLeft: "auto" }}>
                  Login
                </Button>
                <Button variant="contained" sx={{ marginLeft: 1 }}>
                  {" "}
                  sign up
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
