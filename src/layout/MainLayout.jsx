import { useMemo } from 'react';
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom';
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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import routes from '../routes.js';

const drawerWidth = 260;

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  const drawerContent = (
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
                    onClick={() => setMobileOpen(false)}
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
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => (isDesktop ? setDesktopOpen((o) => !o) : setMobileOpen(true))}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Narsus Coffee Admin — {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={() => {
              localStorage.removeItem('nc_authed');
              navigate('/auth/login', { replace: true });
            }}
          >
            {/* Simple text logout icon substitute */}
            <Typography variant="body2" color="inherit">Logout</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: desktopOpen ? drawerWidth : 72,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: desktopOpen ? drawerWidth : 72,
            boxSizing: 'border-box',
            transition: 'width 0.2s ease',
          },
        }}
        open
      >
        <Toolbar />
        {drawerContent}
      </Drawer>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
      >
        <Toolbar />
        {drawerContent}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
