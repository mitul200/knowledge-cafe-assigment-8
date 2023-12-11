
import { ToastContainer, toast } from 'react-toastify';

const Singledata = ({data,clickToAddTime}) => {
    // eslint-disable-next-line react/prop-types
    // console.log(props)
    // eslint-disable-next-line react/prop-types
   
    // console.log(time)

    const handelClick =()=>{
        toast("Wow so easy!")
    }
    return (
        <div>
            <div className="card m-5 w-[620px] bg-base-100 shadow-2xl mx-auto">
            <figure><img className="w-full h-96 " src={data.url} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center ">
                        <img className="h-[40px] w-[40px] rounded-full" src={data.authorUrl} alt="" />
                        <div className="ms-3">
                            <h1 className="font-bold text-lg">{data.authorName}</h1>
                            <p>Mar 14 (4 Days ago)</p>
                        </div>
                    </div>
                    <div className="flex">
                        <h1 className="font-bold">{data.time} min read</h1>
                        <span onClick={handelClick} className="cursor-pointer ms-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">How to get your first job as a self-taught programmer </h2>
                    <p onClick={() =>clickToAddTime(data.time)} className="text-[#6047EC] mt-3 cursor-pointer">Mark as read</p>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Singledata;