import { AccountCircle, Logout, MenuSharp, Person } from "@mui/icons-material";
import {
  AppBar,
  Grid2,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderTheme } from "../../styles";

const Header = () => {
  const theme = useTheme();
  const classes = HeaderTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const IsMobile = useMediaQuery("(max-width: 600px)");

  function handleLogout() {
    setAnchorEl(null);
    localStorage.clear();
    navigate("/login");
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  return (
    <AppBar sx={{ boxShadow: "0 1px 2px 0 rgb(21 94 117 / 0.25);" }}>
      <Toolbar variant="dense">
        <Grid2 className={classes.root}>
          <Grid2 sx={{ display: "flex", alignItems: "center" }}>
            {IsMobile && (
              <IconButton>
                <MenuSharp sx={{ color: theme.palette.common.white, marginRight: 1 }}/>
              </IconButton>
            )}
            <Link to="/dashboard"
              style={{
                textDecoration: "none",
                color: theme.palette.common.white,
              }}
            >
              <Typography variant="body1">Company Name</Typography>
            </Link>
          </Grid2>
          <Grid2 className={classes.menu}>
            <IconButton
              onClick={handleMenu}
              disableRipple={false}
              sx={{ padding: 0.5, marginLeft: 1 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              id="basic-button"
              aria-expanded={open ? "true" : undefined}
            >
              <AccountCircle
                sx={{ color: theme.palette.common.white, fontSize: 30 }}
              />
            </IconButton>
            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem sx={{ color: theme.palette.error.main }} onClick={handleLogout}>
                <ListItemIcon sx={{ color: theme.palette.error.main }}><Logout /></ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
