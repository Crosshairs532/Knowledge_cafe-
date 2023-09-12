import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ addtoBook, Spendtime }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className="md:w-2/3 ">
            {
                blogs.map(blog => <Blog addtoBook={addtoBook} Spendtime={Spendtime} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;