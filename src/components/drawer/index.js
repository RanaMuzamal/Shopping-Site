import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
import Home from '@material-ui/icons/Home';
import Notification from '@material-ui/icons/NotificationsNoneOutlined';
import Setting from '@material-ui/icons/SettingsOutlined';
import AboutUs from '@material-ui/icons/InfoOutlined';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {globalContext} from '../../contexts/globalContext'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Drawer() {
  const classes = useStyles();
  const {drawerState, setDrawerState} = React.useContext(globalContext)

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={()=>setDrawerState({visibility: false})}
      onKeyDown={()=>setDrawerState({visibility: false})}
    >
      <List>
        {['Home', 'My Orders', 'Promotions', 'Notifications','Setting','About Us','Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <Home  />: < Notification /> }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      
        <React.Fragment >
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <MuiDrawer open={drawerState.visibility} onClose={()=>{setDrawerState({visibility: true})}}>
            {list()}
          </MuiDrawer>
        </React.Fragment>
    
    </div>
  );
}