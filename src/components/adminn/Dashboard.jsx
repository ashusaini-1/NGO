import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  Storefront,
  People,
  Settings,
} from "@mui/icons-material";
import OrderPage from "./Order";

function AdminDashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openOrderPage, setOpenOrderPage] = useState(false);

  const handleOrderClick = () => {
    setOpenOrderPage(true);
  };

  return (
    <div style={{ display: "flex" }}>
      <Drawer
        sx={{
          width: isMobile ? "100%" : 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isMobile ? "100%" : 240,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h6" component="div" sx={{ p: 2 }}>
          Dashboard
        </Typography>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Dashboard" />}
          </ListItem>
          <ListItem button onClick={handleOrderClick}>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Orders" />}
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Products" />}
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Customers" />}
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Settings" />}
          </ListItem>
        </List>
      </Drawer>
      {openOrderPage && <OrderPage />}
    </div>
  );
}

export default AdminDashboard;
