import Moment from "react-moment"



function ShowMomentTime({
    time
}: { time: any }) {

    return (time ?
        <Moment format="LT">{time}</Moment> :
        <span> - </span>
    )
}

export default ShowMomentTime 