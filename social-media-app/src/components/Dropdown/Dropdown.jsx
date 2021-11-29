import DropDownItem from './DropdownItem/DropdownItem';

function Dropdown({ options }) {
        return(
        <div className="dropdown absolute right-0 mx-3 w-40 p-3 bg-gray-100 border-2 border-black rounded-lg z-50">
            <div>
                {options.map((option) => (
                    <DropDownItem to={option.to}>
                        {option.title}
                    </DropDownItem>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;