import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlined as Delete,
} from "@mui/icons-material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const DrawerList = ({open}) => {
  const navList = [
    { id: 1, name: "Notes", icon: <Lightbulb />, route: "/" },
    { id: 2, name: "Archieves", icon: <Archive />, route: "/archive" },
    { id: 3, name: "Trash", icon: <Delete />, route: "/delete" },
  ];
  const navdefaultstyle = {
    textDecoration: "none",
    display: "flex",
    color: "inherit",
    borderRadius: open ? "0 35px 35px 0" : "0",
  };
  const navStyle = ({ isActive }) =>
    isActive
      ? { ...navdefaultstyle, backgroundColor: "#FBBC04", color: "#fff" }
      : navdefaultstyle;
  return (
    <List>
      {navList.map((list) => (
        <NavLink key={list.id} to={`${list.route}`} style={navStyle}>
          <ListItem button >
            <ListItemIcon style={{ alignItems: "center", color:"inherit" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};

export default DrawerList;
