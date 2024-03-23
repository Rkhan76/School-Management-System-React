import React, { useState } from 'react'
import { handleAssignmentPost } from "../../fetching/fetch"

const AssignmentPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    subject: '',
    className: '',
    assignmentCode: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const res = await handleAssignmentPost(formData);
      console.log(res);
      alert('Assignment assigned successfully'); // Show success alert
      setFormData({ // Clear form input details after submission
        title: '',
        description: '',
        deadline: '',
        subject: '',
        className: '',
        assignmentCode: '',
      });
    } catch (error) {
      console.error('Error posting assignment:', error);
    }
  };

  const generateAssignmentCode = () => {
    const { subject, className, description } = formData
    const currentDate = new Date().toISOString().slice(0, 10) // Get current date
    const assignmentCode = `${subject.toUpperCase().substring(0, 3)}-${className
      .toUpperCase()
      .substring(0, 3)}-${currentDate}`
    setFormData({
      ...formData,
      assignmentCode: assignmentCode,
    })
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Assign an Assignment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full h-32"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="className" className="block">
            Class Name:
          </label>
          <input
            type="text"
            id="className"
            name="className"
            value={formData.className}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="deadline" className="block">
            Deadline:
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="assignmentCode" className="block">
            Assignment Code:
          </label>
          <div className="flex">
            <input
              type="text"
              id="assignmentCode"
              name="assignmentCode"
              value={formData.assignmentCode}
              readOnly // Making input box read-only
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
            <button
              type="button"
              onClick={generateAssignmentCode}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Generate
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Assign Assignment
        </button>
      </form>
    </div>
  )
}

export default AssignmentPost
