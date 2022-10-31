import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { connect } from 'react-redux';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';




const drawerWidth = 240;
// const margin = 170;


const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: 65,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 65,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function DrawerOne(props) {
  const theme = useTheme();
  const noteChoice=(choice)=>{
    props.listenToDrawer(choice)
    props.dispatch({
    type: `${choice}`
    })
  }
//   const [open, setOpen] = React.useState(false);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
        
      <Drawer variant="permanent" open={props.openDrawer}>
        
         
      
        <List>
          
            <ListItem button onClick={()=>noteChoice("Notes")} style={{gap:'50px'}} >
           
              
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    // mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LightbulbOutlinedIcon />
                
                </ListItemIcon>
                <ListItemText primary="Notes" />
                {/* <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} /> */}
           
            </ListItem>

            <ListItem button onClick={()=>noteChoice("Reminder")} style={{gap:'50px'}} >
           
              
           <ListItemIcon
             sx={{
               minWidth: 0,
               // mr: open ? 3 : 'auto',
               justifyContent: 'center',
             }}
           >
             <NotificationsNoneOutlinedIcon />
           
           </ListItemIcon>
           <ListItemText primary="Reminder"/>
           {/* <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} /> */}
      
       </ListItem>

       <ListItem button onClick={()=>noteChoice("Edit")} style={{gap:'50px'}} >
           
              
           <ListItemIcon
             sx={{
               minWidth: 0,
               // mr: open ? 3 : 'auto',
               justifyContent: 'center',
             }}
           >
             <ModeEditOutlineOutlinedIcon />
           
           </ListItemIcon>
           <ListItemText primary="Edit"/>
           {/* <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} /> */}
      
       </ListItem>

       <ListItem  button onClick={()=>noteChoice("Archive")} style={{gap:'50px'}}>
           
              
           <ListItemIcon
             sx={{
               minWidth: 0,
               // mr: open ? 3 : 'auto',
               justifyContent: 'center',
             }}
           >
             <ArchiveOutlinedIcon />
           
           </ListItemIcon>
           <ListItemText primary="Archive"/>
           {/* <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} /> */}
      
       </ListItem>

       <ListItem  button onClick={()=>noteChoice("Trash")} style={{gap:'50px'}}>
           
              
           <ListItemIcon
             sx={{
               minWidth: 0,
               // mr: open ? 3 : 'auto',
               justifyContent: 'center',
             }}
           >
             <DeleteOutlineOutlinedIcon />
           
           </ListItemIcon>
           <ListItemText primary="Trash"/>
           {/* <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} /> */}
      
       </ListItem>
         
        </List>
       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        
      </Box>
    </Box>
  );
}
export default connect()(DrawerOne)