import PropTypes from 'prop-types';
import img from '../../../knowledge-cafe-main/images/profile.png'
// import { FaBookmarks } from 'react-icons/fa';

const Blog = ({ blog, addtoBook, Spendtime }) => {
    console.log(blog, "hi");

    const { cover, title, author, posted_date, reading_time, hashtags } = blog;
    return (

        <div className='mb-7'>
            <hr className='container m-auto mt-6 mb-6 h-2' />
            <img className='w-full rounded-md mr-0 h-[450px]' src={cover} alt="" />
            <div className=' p-5 flex justify-between'>
                <div className='flex items-center gap-4'>
                    <img src={img} alt="" />
                    <div className='' >
                        <h1 className='font-bold'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                    <button onClick={() => addtoBook(blog)} >book</button>
                </div>
            </div>
            <h1 className='font-[700] text-4xl'>{title}</h1>
            <p className='font-[500] text-[#11111199]'>
                {
                    hashtags.map((hash, idx) => <span className='mr-3' key={idx}>#{hash}</span>)
                }
            </p>

            <button className='mt-4' onClick={() => Spendtime(blog.id, blog.reading_time)}>Mark as read</button>
        </div >
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addtobook: PropTypes.func
};

export default Blog;
