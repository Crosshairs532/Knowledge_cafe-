import { prototype } from "postcss/lib/previous-map";
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    console.log(bookmarks, "boooooook")
    return (
        <div className=" m-4 w-full bg-[#1111110D] flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-3">bookmarks:{bookmarks.length}</h1>
            <div>
                {
                    bookmarks.map(book => <Bookmark book={book} ></Bookmark>)
                }

            </div>
        </div>
    );
};

export default Bookmarks;


