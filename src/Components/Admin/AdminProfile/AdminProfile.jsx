import React, { useState } from 'react'
import profileImage from '../../../assets/profileImage.png'
import EditProfileDetail from '../../Common/EditProfileDetail/EditProfileDetail'

function AdminProfile() {
    const adminDetailInput = [
      {
        adminId: 'A001',
        name: 'Admin Smith',
        userType: 'Super Admin',
        gender: 'Male',
        email: 'admin@example.com',
        phoneNumber: '+1 123-456-7890',
        role: 'System Administrator',
        experience: '10 years',
      },
    ]

    const [form, setForm] = useState(null)

    function displayEditForm(e){
        const oldValue = e.target.innerText
        switch(e.target.value){
            case 'address':
                setForm(
                  <EditProfileDetail link="./hello" value={oldValue} heading='Update Address'/>
                )
                break;
            case 'email':
                setForm(
                  <EditProfileDetail
                    link="./hello"
                    value={oldValue}
                    heading="Update Email Address"
                  />
                )
                break;
            case 'phoneNumber':
                setForm(
                  <EditProfileDetail
                    link="./hello"
                    value={oldValue}
                    heading="Update Phone Number"
                  />
                )
                break;
            default:
                setForm(null)
        }
    }

     const adminDetails = adminDetailInput.map((admindetail) => {
       return (
         <div
           className="flex gap-10 p-10 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
           key={admindetail.name}
         >
           <img src={profileImage} className="h-36 w-36" alt="profileImage" />
           <div>
             <h1 className="text-3xl">{admindetail.name}</h1>
             <table className="border-collapse w-full mt-4">
               <tbody>
                 {Object.entries(admindetail).map(([key, value]) => {
                   return (
                     <tr key={key} className="p-2">
                       <td className="p-1.5 font-bold">{key}</td>
                       <td className="p-1.5">{value}</td>
                       {key === 'address' ||
                       key === 'email' ||
                       key === 'phoneNumber' ? (
                         <td>
                           <button
                             onClick={displayEditForm}
                             type="button"
                             value={key}
                             className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1 me-2 dark:focus:ring-yellow-900"
                           >
                             Edit
                           </button>
                         </td>
                       ) : null}
                     </tr>
                   )
                 })}
               </tbody>
             </table>
           </div>
         </div>
       )
     })

  return (
    <div className="mt-10 p-10 flex justify-center box-border rounded-md">
      {adminDetails}
      {form}
    </div>
  )
}

export default AdminProfile
