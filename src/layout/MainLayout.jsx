import { useMemo } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import routes from '../routes.js';

const drawerWidth = 260;

export default function MainLayout() {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({});

  const handleToggleMenu = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const title = useMemo(() => {
    const found = routes
      .flatMap((m) => m.children?.map((c) => ({ ...c, parent: m.title })) ?? [])
      .find((c) => location.pathname.includes(c.path));
    return found ? `${found.parent} • ${found.title}` : 'Dashboard';
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => setOpen((o) => !o)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Narsus Coffee Admin — {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{
        width: open ? drawerWidth : 72,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : 72,
          boxSizing: 'border-box',
          transition: 'width 0.2s ease',
        },
      }}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {routes.map((menu) => (
              <Box key={menu.key}>
                <ListItemButton onClick={() => handleToggleMenu(menu.key)}>
                  <ListItemText primary={menu.title} />
                  {openMenus[menu.key] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={!!openMenus[menu.key]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.children?.map((child) => (
                      <ListItemButton
                        key={child.path}
                        component={Link}
                        to={`/${child.path}`}
                        selected={location.pathname === `/${child.path}`}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary={child.title} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
