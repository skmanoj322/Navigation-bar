import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((link, index) => (
            <ListItemButton key={index} divider onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItemText>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ marginLeft: "auto", color: "white" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
