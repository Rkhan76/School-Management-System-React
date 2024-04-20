import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import viewIcon from "../../assets/viewIcon.png";
import deleteIcon from "../../assets/deleteIcon.png";
import {
  handleGetAssignment,
  handleAssignmentDelete,
} from "../../fetching/fetch";

const AssignmentAdmin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState({});
  
  // View Assignment
  const [selectedSession, setSelectedSession] = useState("");
  const [assignments, setAssignments] = useState([]);
  const yearArray = [2000, 2011, 2019, 2024];

  const years = yearArray.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));

  const handleYearSelect = async (e) => {
    const selectedYear = e.target.value;
    setSelectedSession(selectedYear);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedSession) {
        try {
          const response = await handleGetAssignment(selectedSession);
          const assignmentData = response.map((assignment, index) => ({
            ...assignment,
            id: index + 1, // Add 1 to avoid zero-based indexing
          }));
          setAssignments(assignmentData);
        } catch (error) {
          console.error("Error fetching assignment data:", error);
        }
      }
    };
    fetchData();
  }, [selectedSession]);

  const handleDeleteAssignment = async (params) => {
    const assignmentId = params._id;
    console.log("here is the id", assignmentId);
    try {
      const response = await handleAssignmentDelete(assignmentId);
      console.log(response);
      // If the assignment is deleted successfully, remove it from the assignments list
      setAssignments((prevAssignments) =>
        prevAssignments.filter((assignment) => assignment._id !== assignmentId)
      );
      alert("Assignment deleted successfully!");
    } catch (error) {
      console.error("Failed to delete Assignment:", error);
      alert("Error deleting Assignment");
    }
  };

  const displayViewAssignment = (assignment) => {
    setCurrentAssignment(assignment);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const columns = [
    { field: "className", headerName: "Class", width: 90 },
    {
      field: "subject",
      headerName: "Subject",
      width: 150,
      editable: false,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: false,
    },
    {
      field: "assignmentCode",
      headerName: "Assignment-Code",
      width: 150,
      editable: false,
    },
    {
      field: "deadline",
      headerName: "Deadline",
      width: 250,
      editable: false,
    },
    {
        field: "teacherEmail",
        headerName: "Teacher Email",
        width: 250,
        editable: false,
      },
    {
      field: "view Assignment",
      headerName: "View Assignment",
      width: 150,
      renderCell: (params) => (
        <img
          src={viewIcon}
          onClick={() => displayViewAssignment(params.row)}
          alt="View Icon"
          style={{ width: 24, height: 24, cursor: "pointer" }}
        />
      ),
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <img
          src={deleteIcon}
          onClick={() => handleDeleteAssignment(params.row)}
          alt="view Icon"
          style={{ width: 24, height: 24, cursor: "pointer" }}
        />
      ),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="m-10 bg-gray-400 rounded-md">
            <h1 className="p-5 text-3xl">Assignment</h1>
            <div className="p-4">
              <label className="p-4 text-lg" htmlFor="Session">
                Select Class
              </label>
              <select
                className="p-2 w-60 rounded-sm outline-none"
                onChange={handleYearSelect}
              >
                <option value="">Select Session</option>
                {years}
              </select>
            </div>
          </div>
          <Box className="m-10 rounded-md" sx={{ height: 400 }}>
            <DataGrid
              rows={assignments}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg space-y-4 max-w-md">
            <h2 className="text-lg font-bold">{currentAssignment.title}</h2>
            <p>{currentAssignment.description}</p>
            <p>Subject: {currentAssignment.subject}</p>
            <p>Class: {currentAssignment.className}</p>
            <p>Deadline: {currentAssignment.deadline}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignmentAdmin;
