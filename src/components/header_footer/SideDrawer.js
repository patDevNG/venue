import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const SideDrawer = (props) => {
    return (
    <Drawer
    anchor="right"
    open ={props.open}
    onClose={()=>props.onClose(false)}
    >
    <List component = "nav">
    <ListItem button onClick ={()=>console.log('Event Started')}>
    Event Start in
    </ListItem>
    <ListItem button onClick ={()=>console.log('Event Started')}>
    Venue INFO
    </ListItem>
    <ListItem button onClick ={()=>console.log('Event Started')}>
    Highlight
    </ListItem>
    <ListItem button onClick ={()=>console.log('Event Started')}>
    Event Start in
    </ListItem>
    <ListItem button onClick ={()=>console.log('Event Started')}>
    location
    </ListItem>
    <ListItem button onClick ={()=>console.log('Event Started')}>
    Pricing
    </ListItem>
    </List>
     </Drawer>
    );
};

export default SideDrawer;