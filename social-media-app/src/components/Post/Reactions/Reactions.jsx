import AddCommentIcon from '@material-ui/icons/AddComment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function Reactions() {
    return(
        <div className="flex justify-between items-center max-w-4xl mx-auto border-2 border-black rounded-lg bg-gray-100 divide-x divide-black">
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-l-lg cursor-pointer hover:bg-gray-300">
                <FavoriteIcon className="h-4"/>
                <p className="text-xs sm:text-base">favorite</p>
            </div>
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 cursor-pointer hover:bg-gray-300">
                <AddCommentIcon className="h-4"/>
                <p className="text-xs sm:text-base">add comment</p>
            </div>
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center rounded-r-lg p-2 cursor-pointer hover:bg-gray-300">
                <ThumbUpAltIcon className="h-4"/>
                <p className="text-xs sm:text-base">like</p>
            </div>
        </div>
    )
}

export default Reactions;