import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Menu,
  useMediaQuery,
  MenuItem,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Logo from "../getDocsNow-approvedLogos-small-01 1.png";
import avatarImage from "../download.png";
import MenuIcon from "@material-ui/icons/Menu";
import "../index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  mobileMenuButton: {
    marginRight: theme.spacing(1),
  },
  activeTab: {
    borderTop: "2px solid #1eabc7",
    borderBottom: "none",
  },
}));
export const NavBars = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <img src={Logo} width="150px" height="80px" alt="Get Docs Now Logo" />
          <Typography variant="h6" className={classes.title}></Typography>
          {isMobile ? (
            <IconButton
              edge="start"
              className={classes.mobileMenuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Button style={{ color: "white" }}>Pending Orders</Button>
              <Button style={{ color: "white" }}>Completed Orders</Button>
              <Button style={{ color: "white" }}>Management</Button>
            </>
          )}
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt="Avatar" src={avatarImage} className="avatar" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <hr />
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
