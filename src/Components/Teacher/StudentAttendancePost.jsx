import {handleGetClassData} from "../../fetching/fetch"

function StudentAttendancePost() {
const classArray = [1,2,3,4,5,6,7,8]

const studentClasses = classArray.map((studentClass)=>{
    return (
        <option value={studentClass} key={studentClass}>{studentClass}</option>
    )
})

const handleClassSelect = async(e)=>{
    const selectedClass = e.target.value
    const classData =  await handleGetClassData(selectedClass)

    console.log(classData)

}


  return (
    <div>
      <div className="m-10 bg-gray-400 rounded-md">
        <h1 className="p-5 text-3xl">Student Attendence</h1>
        <div className="p-4">
          <label className="p-4 text-lg" htmlFor="Session">
            Select Session
          </label>
          <select
            className="p-2 w-60 rounded-sm outline-none"
            onChange={handleClassSelect}
          >
            <option value="">Select Class</option>
            {studentClasses}
          </select>
        </div>
      </div>
    </div>
  )
}

export default StudentAttendancePost
