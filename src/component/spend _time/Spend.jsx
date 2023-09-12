const Spend = ({ count }) => {
    console.log(count)
    return (
        <div className=" m-4 p-7 rounded-lg text-white bg-[#6047EC1A] text-[#6047EC]">
            <h1 className="text-lg font-semibold">Spend time on read: {count} min</h1>
        </div>
    );
};

export default Spend;