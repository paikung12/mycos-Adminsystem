export default  interface leaves {
    leaveId: number,
  employeeId: number,
  dateRequest: string,
  dateLeave: string,
  dateLeaveTo: string,
  typeId: number,
  subject: string,
  description: string,
  approveBy: string,
  note: string,
  fileUpload: string,
  leaveAmount: number,
  status: string,
  approveKey: string,
  dateLeavePeriod: string,
  dateLeaveToPeriod: string,
  isEmergency: true,
  type: {
    leaveTypeId: number,
    typeName: string,
    isActive: true,
    noticeBeforeLeaveDay: string,
    leave: [
      null
    ],
    leaveAmount: [
      {
        leaveAmountId: number,
        employeeId: number,
        leaveTypeId: number,
        amount: number,
        month: string,
        year: string
      }
    ]
  }
}

export default interface leavetoday {
  employeeId: number,
  name: string,
  subject: string,
  projectId: number,
  team: string,
  leaveType: number,
}

export default interface leavemonth {
    employeeId: number,
    name: string,
    subject: string,
    description: string,
    dateLeave: string,
    dateLeaveTo: string,
}

export default interface leave30day {
    employeeId: number,
    name: string,
    subject: string,
    description: string,
    dateLeave: string,
    dateLeaveTo: string,
}