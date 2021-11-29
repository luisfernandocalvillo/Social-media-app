const POSTS_URL = "https://posts-pw2021.herokuapp.com/api/v1/post";

const getPosts = async (limit, page, token) => {
    const response = await fetch(`${POSTS_URL}/all?limit=${limit}&page=${page}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${ token }`
        }
    });

    const info = await response.json();
    return info;
}

const onePost = (data) => {
    if(!data)
        return null;
    else {
        return data;
    }
}

const svcPosts = async (limit, page, token) => {
    const posts = await getPosts(limit, page, token);
    const postsList = posts.data.map(data => onePost(data));
    console.log(postsList);
    return postsList;
}

const addComment = async (comment, token, id) => {
    const response = await fetch(`${POSTS_URL}/comment/${id}`, {
        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${ token }`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    });

    const info = await response.json();
    return info;
}


export default svcPosts;
export { addComment };