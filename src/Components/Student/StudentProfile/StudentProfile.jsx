import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import profileImage from '../../../assets/profileImage.png'
import EditProfileDetail from '../../Common/EditProfileDetail/EditProfileDetail'

function StudentProfile() {
  const profileData = useLoaderData() // Accessing data from loader function
  const studentProfileDetail = profileData.profile
  const [editProfileDetail, setEditProfileDetail] = useState(null)
 


  const handleUpdateProfile = (updatedData) => {
  // Update the state with the updated profile data
  // setStudentProfileDetail(updatedData);
};


<EditProfileDetail
  initialValue={studentProfileDetail}
  onClose={() => setEditProfileDetail(null)}
  onUpdate={handleUpdateProfile}
/>

  const displayEditForm = () => {
    setEditProfileDetail(
      <EditProfileDetail
        initialValue={studentProfileDetail}
        onClose={() => setEditProfileDetail(null)}
        onUpdate={(updatedData) => {
          console.log('Updated Data:', updatedData)
          setEditProfileDetail(null)
        }}
      />
    )
  }

  return (
    <div className="p-10 flex justify-center box-border rounded-md">
      <div
        className="flex gap-10 p-10 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        key={studentProfileDetail.studentId}
      >
        <img src={profileImage} className="h-36 w-36" alt="profileImage" />
        <div>
          <h1 className="text-3xl">
            {studentProfileDetail.firstName + ' ' + studentProfileDetail.lastName}
          </h1>
          <table className="border-collapse w-full mt-4">
            <tbody>
              {Object.entries(studentProfileDetail).map(([key, value]) => (
                <tr key={key} className="p-2">
                  <td className="p-1.5 font-bold">{key}</td>
                  <td className="p-1.5">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => displayEditForm()}
          className="bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 text-white font-bold py-2 px-4 rounded h-10 w-20"
        >
          Edit
        </button>
      </div>
      {editProfileDetail}
    </div>
  )
}

export default StudentProfile
