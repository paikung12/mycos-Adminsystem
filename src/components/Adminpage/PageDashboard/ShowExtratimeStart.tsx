import Moment from "react-moment"



function ShowMomentTime({
    extratimeStart
}: { extratimeStart: any }) {

    return (extratimeStart ?
        <Moment format="LLLT">{extratimeStart}</Moment> :
        <span> - </span>
    )
}

export default ShowMomentTime 