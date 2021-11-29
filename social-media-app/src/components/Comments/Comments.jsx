import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core';

function Comments({ comment }) {
    const { description, user } = comment;
    const { username } = user;

    return (
        <div className="max-w-4xl mx-auto">
            <List className="w-full inline max-w-sm">
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="user" src="https://source.unsplash.com/random" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={username}
                        secondary= {
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className="inline"
                                    color="textPrimary"> {description}
                                </Typography>
                            </React.Fragment>
                        }/>
                </ListItem>
                <Divider variant="inset" component="li" />  
            </List>
        </div>
    )
}

export default Comments;