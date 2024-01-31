import React from 'react'
import profileImage from '../../../assets/profileImage.png'

function ParentsProfile() {
  const parentsDetailInput = [
    {
      name: 'James Doe',
      gender: 'Male',
      occupation: 'Engineer',
      email: 'james.doe@example.com',
      address: '456 Oak Street, Suburbia',
      phoneNumber: '+1 234-567-8901',
    }
  ]

  const parentsDetail = parentsDetailInput.map((parentdetail)=>{
    return (
      <div
        className="flex gap-10 p-10 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        key={parentdetail.name}
      >
        <img src={profileImage} className="h-36 w-36" alt="profileImage" />
        <div>
          <h1 className="text-3xl">{parentdetail.name}</h1>
          <table className="border-collapse w-full mt-4">
            <tbody>
              {Object.entries(parentdetail).map(([key, value]) => {
                return (
                  <tr key={key} className="p-2">
                    <td className="p-1.5 font-bold">{key}</td>
                    <td className="p-1.5">{value}</td>
                    {key === 'address' ||
                    key === 'email' ||
                    key === 'phoneNumber' ? (
                      <td>
                        <button
                          type="button"
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
      {parentsDetail}
    </div>
  )
}

export default ParentsProfile
