import { Getcretendials } from "../Auth/auth"
import axios from 'axios'

const { token, email } = Getcretendials()



export async function handleGetStudentProfile() {
  const { token, email } = Getcretendials()
  console.log("here on handleGetStudentProfile :", email)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
    },
  }

  try {
    const response = await axios.get(
      'http://localhost:8000/profile/student',
      config
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching student profile:', error)
    throw error 
  }
}

export async function handleUpdateStudentProfile(studentUpdatedData) {

  console.log(email)
  console.log(studentUpdatedData)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
    },
    
  }

  try {
    const response = await axios.post(
      'http://localhost:8000/profile/student', studentUpdatedData, config
    )

    return response
  } catch (error) {
    console.error('Error fetching student profile:', error)
    throw error 
  }
}


export async function handleGetClassData(selectedClass) {
  // console.log("selected class :", selectedClass)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
      selectedClass
    },
  }
  try{
    const response = await axios.get("http://localhost:8000/profile/class",config)
    console.log(response.data.classData)
    return response.data.classData
  }catch(error){
    console.log("error in fetching classData : ", error)
  }
 
}

export async function handleGetStudentAttendance(selectedSession, studentEmail) {
  console.log('checking selectedSession', selectedSession)
  const { token, email } = Getcretendials()

  // If selectedSession is falsy (null or undefined), set it to the current year
  if (!selectedSession) {
    selectedSession = new Date().getFullYear() // Use new Date().getFullYear() instead of Date.now().getFullYear()
    console.log('session not selected : ', selectedSession)
  }

  if (!studentEmail) {
    studentEmail = email
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
      year: selectedSession,
      studentEmail: studentEmail,
    },
  }



  try {
    const response = await axios.get(
      'http://localhost:8000/attendance/student',
      config
    )

    console.log("On fetch page :",response.data.attendance[0].attendance)
    return response.data.attendance[0].attendance
  } catch (error) {
    console.log('error in fetching student Attendance : ', error)
  }
}


export async function handlePostStudentAttendance(
  studentEmail,
  className,
  attendance
) {
  const { token, email } = Getcretendials()
  const selectedSession = new Date().getFullYear()

  console.log("Attendance :",attendance)

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
    },
  }

  const body = {
    year: selectedSession,
    className: className,
    email: studentEmail,
    attendance: attendance
  }

  try {
    const response = await axios.post(
      'http://localhost:8000/attendance/student',
      body,config
    )

    console.log(response)
    return response
  } catch (error) {
    console.log('error in fetching student Attendance : ', error)
  }
}


export async function handleGetStudentResult(
  selectedSession,
  studentEmail
) {
  console.log('checking selectedSession', selectedSession)
  const { token, email } = Getcretendials()

  // If selectedSession is falsy (null or undefined), set it to the current year
  if (!selectedSession) {
    selectedSession = new Date().getFullYear() // Use new Date().getFullYear() instead of Date.now().getFullYear()
    console.log('session not selected : ', selectedSession)
  }

  if (!studentEmail) {
    studentEmail = email
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
      year: selectedSession,
      studentEmail: studentEmail,
    },
  }

  try {
    const response = await axios.get(
      'http://localhost:8000/result',
      config
    )
    

    console.log('On fetch page :', response.data.result[0].result)
    return response.data
  } catch (error) {
    console.log('error in fetching student Attendance : ', error)
  }
}

export async function handlePostStudentResult(
  selectedSession,
  studentEmail,
  studentClass,
  studentResultForm
) {
  console.log(studentResultForm)
  const { result } = studentResultForm
  const { token, email } = Getcretendials()

  if (!selectedSession) {
    selectedSession = new Date().getFullYear()
  }

  if (!studentEmail) {
    studentEmail = email
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }

  const data = {
    email: studentEmail,
    studentClass,
    result,
    year: selectedSession,
  }

  try {
    const response = await axios.post(
      'http://localhost:8000/result',
      data,
      config
    )
    console.log(response)
    return response
  } catch (error) {
    console.log('Error submitting form data:', error)
    throw error
  }
}

export async function handleAssignmentPost(
  assignmentForm
) {
 
  const { token, email } = Getcretendials()
  const selectedSession = new Date().getFullYear()
  const teacherEmail = email

  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }

  const data = {
    ...assignmentForm,
    teacherEmail,
    year: selectedSession
  }

  try {
    const response = await axios.post(
      'http://localhost:8000/assignment',
      data,
      config
    )
    console.log(response.data)
    return response.data.message
  } catch (error) {
    console.log('Error submitting form data:', error)
    throw error
  }
}

export async function handleGetAssignment(selectedSession) {
  console.log('checking selectedSession', selectedSession)
  const { token, email,role } = Getcretendials()

  // If selectedSession is falsy (null or undefined), set it to the current year
  if (!selectedSession) {
    selectedSession = new Date().getFullYear() // Use new Date().getFullYear() instead of Date.now().getFullYear()
    console.log('session not selected : ', selectedSession)
  }

  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
      year: selectedSession,
      role: role
    },
  }

  try {
    const response = await axios.get('http://localhost:8000/assignment', config)

    console.log('On fetch page :', response.data.assignments)
    return response.data.assignments
  } catch (error) {
    console.log('error in fetching student Attendance : ', error)
  }
}

export async function handleNoticePost(
  noticeData
) {
 
  const { token, email } = Getcretendials()
  
  

  const headers = {
    Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
  };
  
  

  try {
    const response = await axios.post('http://localhost:8000/notice', {...noticeData, email}, { headers: headers });
            console.log(response.data.notice);
        } catch (error) {
            console.error('Failed to publish notice:', error);
            alert('Error publishing notice');
        }
}

export async function handleNoticeGet(){
  const { token, email } = Getcretendials()
  
  const headers = {
    Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
  };

  try {
    const response = await axios.get('http://localhost:8000/notice', { headers: headers})

    return response.data.notice
  } catch (error) {
    console.log('error in fetching notice : ', error)
  }
}

export async function handleNoticeDelete(noticeId){
  const { token, email } = Getcretendials();
  console.log('noticeId :', noticeId)
  
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.delete(`http://localhost:8000/notice/${noticeId}`, { headers: headers });
    console.log(response);
    return response;
  } catch (error) {
    console.log('error in deleting notice: ', error);
    throw error; // Rethrow the error to handle it in the component
  }
}

export async function handleAssignmentDelete(assignmentId){
  const { token, email } = Getcretendials();
  console.log('assignemtId :', assignmentId)
  
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.delete(`http://localhost:8000/assignment/${assignmentId}`, { headers: headers });
    console.log(response);
    return response;
  } catch (error) {
    console.log('error in deleting notice: ', error);
    throw error; // Rethrow the error to handle it in the component
  }
}

export async function handleGetAssignmentByStudent(selectedSession) {
  console.log('checking selectedSession becuase it is necessary', selectedSession)
  const { token, email, studentClass } = Getcretendials()
  console.log(Getcretendials())

  // If selectedSession is falsy (null or undefined), set it to the current year
  if (!selectedSession) {
    selectedSession = new Date().getFullYear() // Use new Date().getFullYear() instead of Date.now().getFullYear()
    console.log('session not selected : ', selectedSession)
  }

  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
      year: selectedSession,
      studentClass: studentClass
    },
  }

  try {
    const response = await axios.get('http://localhost:8000/assignment', config)

    console.log('On fetch page :', response.data.assignments)
    return response.data.assignments
  } catch (error) {
    console.log('error in fetching student Attendance : ', error)
  }
}






export async function handleResultDelete(studentEmail){
  const { token, email } = Getcretendials();
  console.log('assignemtId on fetch :', studentEmail)
  
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.delete(`http://localhost:8000/result/${studentEmail}`, { headers: headers });
    console.log(response);
    return response;
  } catch (error) {
    console.log('error in deleting notice: ', error);
    throw error; // Rethrow the error to handle it in the component
  }
}

export async function handleGetTimeTableByStudent() {
  const { token, email, studentClass } = Getcretendials();
  // const studentClass = GetStudentClass(); // Assuming GetStudentClass() retrieves the student's class

  console.log('checking selectedSession because it is necessary', studentClass);
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email
    }
  };

  try {
    const response = axios.get(`http://localhost:8000/time-table?class=${studentClass}`);
    console.log('On fetch page:', response); // Assuming response contains timetable data
    return response
  } catch (error) {
    console.log('Error in fetching student timetable:', error);
    // Handle error as needed
  }
}

export const handleSubmitStudentAssignment = async (data) => {
  const { token, email, studentClass } = Getcretendials();
  try {
    const response = await axios.post("http://localhost:8000/assignment/submit", {
      ...data,
      studentEmail:email,
      
    });
    return response.data;
  } catch (error) {
    throw new Error("Error submitting assignment:", error);
  }
};


export async function handleGetAdminProfile() {
  const { token, email } = Getcretendials()
  console.log("here on handleGetStudentProfile :", email)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
    },
  }

  try {
    const response = await axios.get(
      'http://localhost:8000/profile/admin',
      config
    )
    console.log("on admin profile fetch funtion",response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching admin profile:', error)
    throw error 
  }
}


export async function handleGetUserDetail(){
  const { token, email } = Getcretendials()
  console.log("here on handleGetStudentProfile :", email)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
    },
  }

  try {
    const response = await axios.get(
      'http://localhost:8000/user-details', // <--- Endpoint is '/user-details'
      config
    )
    console.log("User details:",response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching user details:', error)
    throw error 
  }
}



export async function handleGetUserProfile(email, role) {
  try {
    const response = await axios.get(`http://localhost:8000/user-details/profile/${email}?role=${role}`);
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user profile: " + error.message);
  }
}


export async function handleDeleteUserProfile(email, role) {
  try {
    const response = await axios.delete(`http://localhost:8000/user-details/profile/${email}/${role}`);
    return response.data;
  } catch (error) {
    throw new Error("Error deleting user profile: " + error.message);
  }
}


















