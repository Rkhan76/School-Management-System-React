import React from "react";
import profileImage from '../../../assets/profileImage.png'

function StudentProfile(){
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
       intro: 'John is an enthusiastic student with a passion for science and technology.',
     },
   ]

   const studentDetails = studentDetailInput.map((studentdetail) => {
     return (
       <div
         className="flex gap-10 rounded-t-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
         key={studentdetail.name}
       >
         <img src={profileImage} className="h-36 w-36" alt="profileImage" />
         <div>
           <h1 className="text-3xl">{studentdetail.name}</h1>
           <p className="">{studentdetail.intro}</p>
           <table className="border-collapse border-gray-400">
             {Object.entries(studentdetail).map(([key, value]) => {
               return (
                 <tr className="p-2">
                   <td className="border-gray-400 p-2 font-bold">{key}</td>
                   <td>:</td>
                   <td className="border-gray-400 p-2">{value}</td>
                 </tr>
               )
             })}
           </table>
         </div>
       </div>
     )
   })
    return (
      <div className="m-20 p-10 box-border rounded-md">
        {studentDetails}
      </div>
    )
}

export default StudentProfile