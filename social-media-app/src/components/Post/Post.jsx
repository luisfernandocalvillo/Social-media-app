import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

function Post({ image, title, description, user }) {
    return (
        <div className="post flex max-w-4xl bg-white mx-auto rounded-lg mt-6 mb-1 border-2 border-black p-3">
            <div className="post_header w-full">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="post_avatar my-4" src="https://source.unsplash.com/random" alt="User" />
                    </ListItemAvatar>
                    <ListItemText primary={user} secondary={title} />
                </ListItem>
                <h3 className="mx-3 -mt-0 mb-4">{description}</h3>
                <div className="max-w-4xl flex justify-center">
                    <img
                        className="post_img rounded-lg"
                        src={image} 
                        alt="Post pic" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Post;