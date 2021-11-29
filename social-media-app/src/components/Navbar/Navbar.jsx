import logo from '../../assets/logo.png';

function Navbar( props ) {
    return(
        <nav className="h-14 bg-blue-100 border-2 border-black rounded-b-lg">
            <div className="flex flex-row items-center justify-between">
                <div className="h-14">
                    <img className="p-3 h-full" src={logo} alt="navbar_logo" />
                </div>
                <p className="text-xl font-bold">theforum.</p>
                <div className="h-14">
                    <ul className="p-3 h-full"> { props.children } </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;