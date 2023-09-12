import img from '../../../knowledge-cafe-main/images/profile.png'
const Header = () => {
    return (
        <div className=' container m-auto flex justify-between mt-7 items-center'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={img} alt="" />

        </div>
    );
};

export default Header;