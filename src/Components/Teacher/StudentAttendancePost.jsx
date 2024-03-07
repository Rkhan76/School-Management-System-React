import * as React from 'react';
import { useState, useEffect } from 'react';
import { handleGetClassData } from "../../fetching/fetch"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


function StudentAttendancePost() {
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');

  const classArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const studentClasses = classArray.map((studentClass) => (
    <option value={studentClass} key={studentClass}>{studentClass}</option>
  ));

  const handleClassSelect = async (e) => {
    const selectedClass = e.target.value;
    setSelectedClass(selectedClass);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (selectedClass) {
        try {
          const response = await handleGetClassData(selectedClass);
          const classData = response.map((student, index) => ({
            ...student,
            id: index + 1 // Add 1 to avoid zero-based indexing
          }));
          setStudents(classData);
          console.log("classData obtained:", classData); // Access classData here
        } catch (error) {
          console.error("Error fetching class data:", error);
        }
      }
    };
    fetchData();
  }, [selectedClass]);
  

  console.log("student data :",students)

  const columns = [
    { field: 'studentId', headerName: 'Student ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 110,
    //   editable: true,
    // },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];

  

  return (
    <div>
      <div className="m-10 bg-gray-400 rounded-md">
        <h1 className="p-5 text-3xl">Student Attendance</h1>
        <div className="p-4">
          <label className="p-4 text-lg" htmlFor="Session">
            Select Session
          </label>
          <select
            className="p-2 w-60 rounded-sm outline-none"
            onChange={handleClassSelect}
          >
            <option value="">Select Class</option>
            {studentClasses}
          </select>
        </div>
      </div>

      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={students}
          columns={columns} // Define your columns here
          pageSize={5}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

    </div>
  );
}

export default StudentAttendancePost;