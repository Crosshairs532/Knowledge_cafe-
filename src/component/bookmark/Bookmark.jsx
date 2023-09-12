const Bookmark = ({ book }) => {

    return (
        <div className="w-[300px] text-center bg-[#ffff] mb-3 p-5 rounded-lg text-lg font-[500]">
            <h1>{book.title}</h1>
        </div>
    );
};

export default Bookmark;