import React, { useState, useEffect } from "react";
import { handleGetAssignmentByStudent } from "../../fetching/fetch";

function StudentAssignment() {
  // State variables
  const [assignments, setAssignments] = useState([]);
  const [selectedSession, setSelectedSession] = useState("");

  // Fetch assignments based on the selected session
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        console.log(
          "selected session on student assignment page",
          selectedSession
        );
        const response = await handleGetAssignmentByStudent(selectedSession);
        setAssignments(response);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    if (selectedSession) {
      fetchAssignments();
    }
  }, [selectedSession]);

  // Render assignments
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Assignments for Session {selectedSession}
      </h1>
      {/* Dropdown to select session */}
      <select
        value={selectedSession}
        onChange={(e) => setSelectedSession(e.target.value)}
        className="block w-full p-3 border border-gray-300 rounded-md mb-8 shadow-md focus:outline-none focus:border-blue-500"
      >
        <option value="">Select Session</option>
        {/* Populate dropdown with available sessions */}
        {/* You can fetch this data from your API or provide it statically */}
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
      {/* Display assignments */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="border rounded-md p-6 bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold mb-4">
              {assignment.title}
            </h2>
            <p>Subject: {assignment.subject}</p>
            <p>Description: {assignment.description}</p>
            <p>Deadline: {assignment.deadline}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentAssignment;
