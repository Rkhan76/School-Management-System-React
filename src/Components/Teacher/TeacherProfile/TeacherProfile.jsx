import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import profileImage from '../../../assets/profileImage.png'
import axios from 'axios'

function TeacherProfile() {
  const [teacherDetailInput, setTeacherDetailInput] = useState([])
  const [editProfileDetail, setEditProfileDetail] = useState(null)

  useEffect(() => {
    const fetchTeacherProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/profile/teacher')
        setTeacherDetailInput([response.data[0]])
      } catch (error) {
        console.error('Error fetching teacher profile data:', error)
      }
    }
    fetchTeacherProfile()
  }, [])

  const [formData, setFormData] = useState({
    newEmail: '',
    newPhoneNumber: '',
    newFirstName: '',
    newLastName: '',
    newGender: '',
    newClassTeacher: '',
    newAddress: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const displayEditForm = (teacher) => {
    setFormData({
      newEmail: teacher.email,
      newPhoneNumber: teacher.phoneNumber,
      newFirstName: teacher.firstName,
      newLastName: teacher.lastName,
      newGender: teacher.gender,
      newClassTeacher: teacher.classTeacher,
      newAddress: teacher.address,
    })
    setEditProfileDetail(
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center" key="edit-profile">
        <div className="bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newEmail">Email</label>
            <input
              id="newEmail"
              name="newEmail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.newEmail}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newFirstName">First Name</label>
            <input
              id="newFirstName"
              name="newFirstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.newFirstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newLastName">Last Name</label>
            <input
              id="newLastName"
              name="newLastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.newLastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newGender">Gender</label>
            <input
              id="newGender"
              name="newGender"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.newGender}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newClassTeacher">Class Teacher</label>
            <input
              id="newClassTeacher"
              name="newClassTeacher"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.newClassTeacher}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPhoneNumber">Phone Number</label>
            <input
              id="newPhoneNumber"
              name="newPhoneNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.newPhoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newAddress">Address</label>
            <input
              id="newAddress"
              name="newAddress"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.newAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
              onClick={() => updateTeacherProfile(teacher)}
            >
              Save
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setEditProfileDetail(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  const updateTeacherProfile = async (teacher) => {
    try {
      await axios.put(`http://localhost:8000/profile/teacher/${teacher._id}`, {
        phoneNumber: formData.newPhoneNumber,
        firstName: formData.newFirstName,
        lastName: formData.newLastName,
        gender: formData.newGender,
        classTeacher: formData.newClassTeacher,
        address: formData.newAddress,
      })
      const updatedTeacherDetailInput = teacherDetailInput.map((t) => {
        if (t._id === teacher._id) {
          return {
            ...t,
            phoneNumber: formData.newPhoneNumber,
            firstName: formData.newFirstName,
            lastName: formData.newLastName,
            gender: formData.newGender,
            classTeacher: formData.newClassTeacher,
            address: formData.newAddress,
          }
        }
        return t
      })
      setTeacherDetailInput(updatedTeacherDetailInput)
      setEditProfileDetail(null)
    } catch (error) {
      console.error('Error updating teacher profile:', error)
    }
  }

  return (
    <div className="mt-10 p-10 flex justify-center box-border rounded-md">
      {teacherDetailInput.map((teacher) => (
        <div
          className="flex gap-10 p-10 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          key={teacher._id}
        >
          <img src={profileImage} className="h-36 w-36" alt="profileImage" />
          <div>
            <h1 className="text-3xl">{teacher.teacherId}</h1>
            <table className="border-collapse w-full mt-4">
              <tbody key="teacher-details">
                <tr>
                  <td className="p-1.5 font-bold">First Name:</td>
                  <td className="p-1.5">{teacher.firstName}</td>
                </tr>
                <tr>
                  <td className="p-1.5 font-bold">Last Name:</td>
                  <td className="p-1.5">{teacher.lastName}</td>
                </tr>
                <tr>
                  <td className="p-1.5 font-bold">Gender:</td>
                  <td className="p-1.5">{teacher.gender}</td>
                </tr>
                <tr>
                  <td className="p-1.5 font-bold">Email:</td>
                  <td className="p-1.5">{teacher.email}</td>
                </tr>
                <tr>
                  <td className="p-1.5 font-bold">Class Teacher:</td>
                  <td className="p-1.5">{teacher.classTeacher}</td>
                </tr>
                <tr>
                  <td className="p-1.5 font-bold">Phone Number:</td>
                  <td className="p-1.5">{teacher.phoneNumber}</td>
                </tr>
                <tr>
                  <td className="p-1.5 font-bold">Address:</td>
                  <td className="p-1.5">{teacher.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            onClick={() => displayEditForm(teacher)}
            className="bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 text-white font-bold py-2 px-4 rounded h-10 w-20"
            key="edit-button"
          >
            Edit
          </button>
        </div>
      ))}
      {editProfileDetail}
    </div>
  )
}

export default TeacherProfile
