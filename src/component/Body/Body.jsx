
import { useEffect } from "react";
import { useState } from "react";
import Singledata from "../SIngledata/Singledata";
import SideCards from "../SideCards/SideCards";


const Body = () => {
    const [datas , setData] = useState([])
    const [watchTime, setWatchTime] = useState("")
    useEffect(()=>{
        fetch('/public/products.json')
        .then(res => res.json())
        .then(value=> setData(value))
    },[])

    const clickToAddTime = (times) =>{
        // console.log('added',times)
        const previousWatchTms = JSON.parse(localStorage.getItem("watchTimes"))
        if(previousWatchTms){
            const sum = previousWatchTms + times
            localStorage.setItem('watchTimes',sum)
            setWatchTime(sum)
        }
        else{
            localStorage.setItem('watchTimes',times)
            setWatchTime(times)
        }
    }
    

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-8">
            <div className="col-span-2">
                {
                    datas.map((data)=><Singledata
                    key={data._id} 
                    data={data}
                    clickToAddTime={clickToAddTime}>

                        </Singledata>)
                }
                <div className="m-8">
                <div className="">
                    <h1 className="text-lg font-bold">1.react works !!</h1>
                    <p> React is a JavaScript library used for building user interfaces, and it can work in the front end of web applications to create interactive and dynamic UIs</p>
                </div>
                <div>
                    <h1 className="text-lg font-bold">2.differntt between props vs state </h1>
                    <p>Props are used for passing data from parent to child components and are immutable.
                    State is used for managing the internal state of a component and is mutable, allowing components to manage and update their data.</p>
                </div>
                <div>
                    <h1 className="text-lg font-bold"> 3.how tto works useEffect</h1>
                    <p>useEffect is used to fetch data after the component has been rendered for the first time ([] as the dependency array).
                        The fetchData function represents some asynchronous operation (like an API call) that fetches data.
                        Once the data is fetched, it's stored in the component's state (data using useState), and it is displayed in the component.</p>
                </div>
                </div>
            </div>
            <div>
                <SideCards watchTime={watchTime}></SideCards>
            </div>
        
        </div>
        </div>
    );
};

export default Body;