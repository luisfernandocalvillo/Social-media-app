import React, { useState, useEffect } from 'react';
import Dropdown from './../../../components/Dropdown/Dropdown';
import Navbar from '../../../components/Navbar/Navbar';
import Post from '../../../components/Post/Post';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useUserContext } from '../../../contexts/UserContext';
import svcPosts from '../../../Services/posts.services';

const UserFav = () => {
    const [posts, setPosts] = useState([]);
    const [queryParams, setQueryParams] = useState({page: 0, limit: 10});
    const { token } = useUserContext();

    useEffect(() => {
        const { page, limit } = queryParams;
        svcPosts(limit, page, token).then((data) => setPosts(data));
    }, []);

    return(
        <>
            <Navbar>
                <NavItem icon={<AccountCircleIcon />}>
                    <Dropdown />
                </NavItem>
            </Navbar>
            { posts.map((post) => {
                return <ShowPost key={post._id} post={post} />;
                })
            }
        </>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    const options = [{title: "View all", to: "/user" }, { title: "Favorites", to: "/favorites"}, { title: "Logout", to: "/login"}];

    return(
        <li className="nav-item">
            <a href="#" className="icon-button cursor-pointer" onClick={() => setOpen(!open) } >
                {props.icon}
            </a>
            {open && <Dropdown options={options} />}
        </li>
    )
}

function ShowPost({ post }) {
    const { title, description, image, user } = post;
    return(
        <div>
            <Post title={title} description={description} image={image} user={user.username} />
        </div>
    )
}

export default UserFav;