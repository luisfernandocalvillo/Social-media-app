import { Link } from "react-router-dom";
import { useUserContext } from '../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function DropDownItem(props){
    const auth = useUserContext();
    const navigate = useNavigate();

    const onClickHandler = (e) =>{
        e.preventDefault();

        auth.logout();
        navigate("/login");
    }

    return(
        <div className="menu-item h-10 items-center text-center rounded-lg p-2 hover:bg-gray-300 cursor-pointer">
            {
			    props.to === '/login' ? (<div onClick={onClickHandler}>{ props.children}</div>) : (<Link to={props.to}>{ props.children }</Link>)
		    }
        </div>
    )
}

export default DropDownItem;