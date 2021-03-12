import Moment from "react-moment"



function ShowMomentTime({
    extratimeFinish
}: { extratimeFinish: any }) {

    return (extratimeFinish ?
        <Moment format="LLLT">{extratimeFinish}</Moment> :
        <span> - </span>
    )
}

export default ShowMomentTime 