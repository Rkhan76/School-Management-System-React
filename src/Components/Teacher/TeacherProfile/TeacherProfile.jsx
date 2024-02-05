import {useState} from 'react'
import profileImage from '../../../assets/profileImage.png'
import EditProfileDetail from '../../Common/EditProfileDetail/EditProfileDetail'

function TeacherProfile() {
  const teacherDetailInput = [
    {
      teacherId: 'T001',
      name: 'Ms. Smith',
      gender: 'Female',
      email: 'teacher1@example.com',
      subject: 'Mathematics',
      class: '10th',
      section: 'A',
      experience: '5 years',
      phoneNumber: '+1 987-654-3210',
    },
  ]

    const [editProfileDetail, setEditProfileDetail] = useState(null)

    function displayEditForm(value) {
      console.log(value)
      setEditProfileDetail(
        <EditProfileDetail
          link="./hello"
          oldValue={value}
          heading="khan"
          isShow={true}
          onClose={() => setEditProfileDetail(null)}
          onUpdate={(e) => {
            e.preventDefault()
            setEditProfileDetail(null)
          }}
        />
      )
    }
  

   const teacherDetails = teacherDetailInput.map((teacherdetail) => {
     return (
       <div
         className="flex gap-10 p-10 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
         key={teacherdetail.name}
       >
         <img src={profileImage} className="h-36 w-36" alt="profileImage" />
         <div>
           <h1 className="text-3xl">{teacherdetail.name}</h1>
           <table className="border-collapse w-full mt-4">
             <tbody>
               {Object.entries(teacherdetail).map(([key, value]) => (
                 <tr key={key} className="p-2">
                   <td className="p-1.5 font-bold">{key}</td>
                   <td className="p-1.5">{value}</td>
                   {key === 'address' ||
                   key === 'email' ||
                   key === 'phoneNumber' ? (
                     <td>
                       <button
                         onClick={() => displayEditForm(value)}
                         type="button"
                         className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1 me-2 dark:focus:ring-yellow-900"
                       >
                         Edit
                       </button>
                     </td>
                   ) : null}
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
     )
   })

  return (
    <div className="mt-10 p-10 flex justify-center box-border rounded-md">
      {teacherDetails}
      {editProfileDetail}
    </div>
  )
}

export default TeacherProfile
