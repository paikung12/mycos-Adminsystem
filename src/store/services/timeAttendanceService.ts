import httpRequest from './httpRequest'
import ITimeToday from '../../types/ITimeToday'
import HeaderDashboard from '../../types/HeaderDashboard'
import Leaves from '../../types/leaves'
import leavestoday from '../../types/leaves'
import leavemonth from '../../types/leaves'
import leavenext30day from '../../types/leaves'



const timeAttendanceService = {
    getTimeOfEmpsToday() {
        return httpRequest.get<ITimeToday[]>('/timeattendance')
    },
    getHeaderDashboard() {
        return httpRequest.get<HeaderDashboard[]>('/employees')
    },
    getleaves() {
        return httpRequest.get<Leaves[]>('/leavetoday')
    },
    postTimeToday(password: string, time: ITimeToday = {}){
        return httpRequest.post<ITimeToday>('/timeattendance/' + password, time)
    },
    putTimeToday( time: ITimeToday  = {}){
        return httpRequest.put<ITimeToday>('/timeattendance/' + time)
    }
}

export default timeAttendanceService