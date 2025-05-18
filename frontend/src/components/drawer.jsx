import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CreateIcon from '@mui/icons-material/AddCircleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {Outlet , Link, useLocation} from 'react-router-dom';


export default function ClippedDrawer(props) {
  const {drawerWidth,content}=props;
  const routes = ['/','/about','/create'];
  const location = useLocation();
  const path = location.pathname;
const [state, setState] = React.useState(true);
const change = () => {
  setState(state ? false : true);
}

  const mydrawer = (<Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home','About', 'Create'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={routes[index]} selected={path === routes[index]}>
                  <ListItemIcon>
                    {[<HomeIcon />, <InfoIcon />, <CreateIcon />][index]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
 
        
        </Box>)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <ListItemIcon onClick={change}>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          display: (state ? { xs: 'none', sm: 'block' } : { xs: 'block', sm: 'none' }),  // change the display property based on the state
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
  
      {mydrawer}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
          {content}
        <Outlet />
      </Box>
    </Box>
  );
}
