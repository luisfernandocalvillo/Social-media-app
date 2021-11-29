import { useNavigate } from 'react-router-dom';
import errores from '../../assets/errores.png';

const NotFound = () => {
    const navigate = useNavigate()

    const onClick = (e) => {
        navigate('/login');
    }

    return(
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-100 ">
            <img className="w-48" src={errores} alt="404"/>
            <h2 className=" text-xl font-roboto text-center">Page not found</h2>
            <button className="rounded-lg md:px-20 px-16 py-2 md:my-6 mb-4 mt-1 transition duration-300 ease-in-out bg-blue-200 hover:bg-blue-300" onClick={(e) => onClick(e)}>Go to Login</button>
        </div>
    );
}

export default NotFound;