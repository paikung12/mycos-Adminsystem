import httpRequest from './httpRequest'
import ITimeToday from '../../types/ITimeToday'
import Dashboard from '../../types/Dashboard'
import Leaves from '../../types/leaves'

const timeAttendanceService = {
    getTimeOfEmpsToday() {
        return httpRequest.get<ITimeToday[]>('/timeattendance')
    },
    getDashboard() {
        return httpRequest.get<Dashboard[]>('/timeattendance')
    },
    getLeaves() {
        return httpRequest.get<Leaves[]>('/timeattendance')
    },
    getExport() {
        return httpRequest.get<Leaves[]>('/timeattendance')
    },
    getTableTimeAtt() {
        return httpRequest.get<Leaves[]>('/timeattendance')
    },
    getSummaryofEmployees() {
        return httpRequest.get<Leaves[]>('/timeattendance')
    },
    getSummaryofWork() {
        return httpRequest.get<Leaves[]>('/timeattendance')
    },
    postTimeToday(password: string, time: ITimeToday = {}){
        return httpRequest.post<ITimeToday>('/timeattendance/' + password, time)
    },
    putTimeToday( time: ITimeToday = {}){
        return httpRequest.put<ITimeToday>('/timeattendance/' + time)
    }

}

export default timeAttendanceService