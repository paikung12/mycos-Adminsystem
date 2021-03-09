import httpRequest from './httpRequest'
import ITimeToday from '../../types/ITimeToday'
import Leavetoday from '../../types/Leaves/leavetoday'
import Leavemonth from '../../types/Leaves/leavemonth'
import Leave30day from '../../types/Leaves/leave30day'
import ITeams from '../../types/ITeams'
import INumHeaderDashboard from '../../types/INumHeaderDashboard'




const timeAttendanceService = {
    getTimeOfEmpsToday() {
        return httpRequest.get<ITimeToday[]>('/timeattendance')
    },
    getleavestoday() {
        return httpRequest.get<Leavetoday[]>('/leavetoday')
    },
    getleavesmonth() {
        return httpRequest.get<Leavemonth[]>('/leavemonth')
    },
    getleavesto30nextday() {
        return httpRequest.get<Leave30day[]>('/leavenextday')
    },
    getTeams(){
        return httpRequest.get<ITeams[]>('/project')
    },
    getHeaderDashboard(){
        return httpRequest.get<INumHeaderDashboard[]>('/dashboard')
    },
     putTimeToday(attId: string, time: ITimeToday = {}){
        return httpRequest.put<ITimeToday>('/timeattendance/' + attId,time)
    },
}

export default timeAttendanceService