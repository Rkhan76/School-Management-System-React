import React from 'react'

import DashboardPageComponents from '../../Common/dashboardPageComponents/DashboardPageComponents'
import studentProfileIcon from '../../../assets/studentProfileIcon.svg'
import attedenceIcon from '../../../assets/attendenceIcon.svg'
import resultIcon from '../../../assets/resultIcon.svg'
import timeTableIcon from '../../../assets/timeTableIcon.svg'
import assignmentIcon from '../../../assets/assignmentIcon.svg'
import noticeIcon from '../../../assets/noticeIcon.svg'
import passwordChangeIcon from '../../../assets/passwordChangeIcon.svg'
import teacherAttendence from '../../../assets/teacherAttendence.svg'
import teacherSchedule from '../../../assets/teacherSchedule.svg'
import studentDetails from '../../../assets/studentDetails.svg'
import teacherReviews from '../../../assets/teacherReviews.svg'
import kidsProfileIcon from '../../../assets/kidsProfileIcon.svg'
import kidsFeesIcon from '../../../assets/kidsFeesIcon.svg'
import complaintsIcon from '../../../assets/complaintsIcon.svg'

function ParentsDashboard() {
  return (
    <div className="dashboardContentContainer">
      <DashboardPageComponents icon={studentProfileIcon} title="Profile" />
      <DashboardPageComponents icon={kidsProfileIcon} title="Kids Profile" />
      <DashboardPageComponents icon={resultIcon} title="Kids Result" />
      <DashboardPageComponents icon={attedenceIcon} title="Kids Attendence" />

      <DashboardPageComponents icon={timeTableIcon} title="Kids Time Table" />
      <DashboardPageComponents icon={assignmentIcon} title="Kids Assignment" />
      <DashboardPageComponents icon={noticeIcon} title="Notice" />
      <DashboardPageComponents
        icon={passwordChangeIcon}
        title="Change Password"
      />
      <DashboardPageComponents icon={kidsFeesIcon} title="Kids Fees" />
      <DashboardPageComponents
        icon={complaintsIcon}
        title="Complain/Feedback"
      />
    </div>
  )
}

export default ParentsDashboard
