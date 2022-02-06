import * as React from 'react';
import List from '@material-ui/core/List';
import { Chat } from "./index"
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( () => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
    },
}));


const Chats = (props) => {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()} />
            })}
        </List>
    );
}
export default Chats;