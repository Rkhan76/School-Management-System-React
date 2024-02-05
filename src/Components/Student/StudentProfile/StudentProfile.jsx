import { useState } from 'react'
import profileImage from '../../../assets/profileImage.png'
import EditProfileDetail from '../../Common/EditProfileDetail/EditProfileDetail'

function StudentProfile() {
  const studentDetailInput = [
    {
      name: 'John Doe',
      gender: 'Male',
      fatherName: 'James Doe',
      motherName: 'Mary Doe',
      dateOfBirth: '2005-05-15',
      religion: 'Christian',
      fatherOccupation: 'Engineer',
      email: 'john.doe@example.com',
      admissionDate: '2023-09-01',
      class: '10th',
      section: 'A',
      house: 'Blue',
      rollNo: '101',
      address: '123 Main Street, Cityville',
      phoneNumber: '+1 123-456-7890',
      intro:
        'John is an enthusiastic student with a passion for science and technology.',
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


   const studentDetails = studentDetailInput.map((studentdetail) => {
     return (
       <div
         className="flex gap-10 p-10 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
         key={studentdetail.name}
       >
         <img src={profileImage} className="h-36 w-36" alt="profileImage" />
         <div>
           <h1 className="text-3xl">{studentdetail.name}</h1>
           <table className="border-collapse w-full mt-4">
             <tbody>
               {Object.entries(studentdetail).map(([key, value]) => (
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
    <div className="p-10 flex justify-center box-border rounded-md">
      {studentDetails}
      {editProfileDetail}
    </div>
  )
}

export default StudentProfile
