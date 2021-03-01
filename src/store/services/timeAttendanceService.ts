import httpRequest from './httpRequest'
import ITimeToday from '../../types/ITimeToday'
import HeaderDashboard from '../../types/HeaderDashboard'
import Leaves from '../../types/Leaves/leaves'
import Leavetoday from '../../types/Leaves/leavetoday'
import Leavemonth from '../../types/Leaves/leavemonth'
import Leave30day from '../../types/Leaves/leave30day'







const timeAttendanceService = {
    getTimeOfEmpsToday() {
        return httpRequest.get<ITimeToday[]>('/timeattendance')
    },
    getHeaderDashboard() {
        return httpRequest.get<HeaderDashboard[]>('/employees')
    },
    getleavestoday() {
        return httpRequest.get<Leavetoday[]>('/leavetoday')
    },
    getleavesmonth() {
        return httpRequest.get<Leavemonth[]>('/leavemonth')
    },
    getleavesto30nextday() {
        return httpRequest.get<Leave30day[]>('/leave30day')
    },
    postTimeToday(password: string, time: ITimeToday = {}){
        return httpRequest.post<ITimeToday>('/timeattendance/' + password, time)
    },
    putTimeToday( time: ITimeToday  = {}){
        return httpRequest.put<ITimeToday>('/timeattendance/' + time)
    }
}

export default timeAttendanceService