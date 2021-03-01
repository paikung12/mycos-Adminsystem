import React from 'react'
import Moment from 'react-moment';


const currDate = () => {

    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();

    
    return(
        <div className="flex justify-center ">
                <div className="tabular-nums rounded-full px-4 text-xs mr-2 py-1 mt-5 text-xl ">
                    <div className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <Moment format="D MMM" className=" pr-3">{currDate}</Moment> | {currTime}
                    </div>
                </div>
        </div>
    )
}

export default currDate;