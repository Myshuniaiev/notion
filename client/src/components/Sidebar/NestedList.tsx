import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Settings, AddCircle, Add, Home, Explore } from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import {
  Avatar,
  IconButton,
  ListItemAvatar,
  Stack,
  Typography,
} from "@mui/material";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => setOpen(!open);

  return (
    <>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt={`Profile image`}
              sx={{ width: 26, height: 26 }}
              variant='rounded'
              src={`https://source.unsplash.com/random`}
            />
          </ListItemAvatar>
          <ListItemText primary={`Oleksii Myshuniaiev`} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText primary="Create page" />
        </ListItemButton>
      </List>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: "20px 15px 0 15px" }}
      >
        <Typography variant="subtitle2" color="grey">
          Teamspaces
        </Typography>
        <IconButton size="small">
          <Add fontSize="inherit" />
        </IconButton>
      </Stack>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="General" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List dense component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="Teamspace Home" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
}
