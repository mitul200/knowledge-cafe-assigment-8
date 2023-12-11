import { useEffect, useState } from "react";

const SideCards = ({watchTime}) => {
    const [time,setTime] = useState(watchTime)
    // console.log(watchTime)
    
    useEffect(()=>{
        const getPreviousData = localStorage.getItem("watchTimes")
        console.log(getPreviousData)
        setTime(getPreviousData)
    },[watchTime])
    return (
        <div>
            <div className="w-[400px] h-[80px] border border-solid text-center font-bold rounded-2xl bg-slate-200">
            <h1 className="text-2xl p-4 text-[#6047EC]">Spent time on read : <span>{time}</span> min </h1>
            </div>
        </div>
    );
};

export default SideCards;