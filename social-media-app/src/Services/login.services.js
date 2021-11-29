const API_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const svc = {};

svc.login = async (username, password) => {
    const response = await fetch(`${API_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });

    if(response.ok) {
        const info = await response.json();
        return info;
    }

    return {};
}

svc.verifyToken = async (token) => {
    const response = await fetch(`${API_URL}/auth/whoami`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${ token }`
        }
    });

    if (response.status === 200) {
        const info = await response.json();
        return info;
    }

    return {};
}

export default svc;