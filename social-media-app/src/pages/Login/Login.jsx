import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useUserContext } from '../../contexts/UserContext';
import harbor from '../../assets/harbor.jpg';

const Login = () => {
    const { login, token } = useUserContext();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const onChange = (e, save) => {
        save(e.target.value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const logged = await login(username, password);

        setError(!logged);
        setUsername("");
        setPassword("");
    }

    useEffect(() => {
        if(token){
            navigate("/redirect");
        }
    }, [token, navigate]);

    return (
        <section className="flex md:flex-row flex-col text-center items-center md:justify-around justify-center min-h-screen gap-6 bg-white">
            <div className="md:block hidden w-5/12">
                <img className="rounded-lg shadow-2xl w-full h-auto" src={harbor} alt="Harbor Landscape" />
            </div>
            <main className="flex flex-col md:w-5/12 w-3/4 md:p-4 p-1 md:my-auto my-2 bg-white">
                <p className="md:text-2xl text-xl font-bold md:m-3 mx-3 mb-3 mt-1">Sign in to your account</p>
                <div className="divide-y divide-gray-400">
                    <form onSubmit={onSubmitHandler} className="text-center bg-white md:w-4/5 w-full md:pb-6 pb-2 mx-auto">
                        {error && <p className="w-full rounded-lg p-2 mt-3 mb-6 text-center text-white font-roboto bg-red-700 select-none">Try again</p>}
                        <p className="text-left my-2">Username</p>
                        <input className="rounded-lg w-full mb-2 p-2 bg-gray-300"
                            type="text"
                            value={username}
                            placeholder="Enter your username" 
                            onChange={(e) => onChange(e, setUsername)}/>
                        <p className="text-left mb-2">Password</p>
                        <input className="rounded-lg w-full mb-2 p-2 bg-gray-300"
                            type="password"
                            placeholder="Enter your password" 
                            onChange={(e) => onChange(e, setPassword)}
                            value={password}/>
                        <button className="rounded-lg md:px-20 px-16 py-2 md:my-6 mb-4 mt-1 transition duration-300 ease-in-out bg-blue-200 hover:bg-blue-300">Sign In</button>
                    </form>
                    <p className="font-bold md:text-2xl text-xl md:py-8 pt-4 text-gray-300">theforum.</p>
                </div>
            </main>
            <div className="md:hidden md:w-5/12 w-4/6">
                <img className="rounded-lg shadow-2xl w-full h-auto" src={harbor} alt="Harbor Landscape" />
            </div>
        </section>
    );
}

export default Login;