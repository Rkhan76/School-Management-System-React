import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { handleGetTimeTableByStudent } from '../../fetching/fetch';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// const { token, email, role, studentClass } = Getcretendials();

function TimeTableStudent() {
  const [className, setClassName] = useState('');
  const [schedule, setSchedule] = useState({
    Monday: new Array(8).fill(''),
    Tuesday: new Array(8).fill(''),
    Wednesday: new Array(8).fill(''),
    Thursday: new Array(8).fill(''),
    Friday: new Array(8).fill('')
  });
  // const [openModal, setOpenModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [timetableData, setTimetableData] = useState(null);

  const classArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const fetchTimeTable = async () => {
      try {
        const response = await handleGetTimeTableByStudent();
        console.log(response.data);
        setTimetableData(response.data.schedule);
        console.log("here is the data of timetable", response.data.schedule);
        // Set the fetched timetable data to the schedule state
        setSchedule(response.data.schedule);
      } catch (error) {
        console.error('Error fetching timetable:', error);
      }
    };
  
    fetchTimeTable();
    
  }, []);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="bg-white p-8 rounded-lg mt-10">
        <h2 className="text-lg font-bold mb-4 text-center">Timetable</h2>
        {timetableData && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-500 table-fixed">
              <thead>
                <tr>
                  <th className="border border-gray-500"></th>
                  {daysOfWeek.map((day, index) => (
                    <th key={index} className="border border-gray-500 text-lg">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }).map((_, index) => (
                  <tr key={index}>
                    <td className="border border-gray-500 text-lg">Period {index + 1}</td>
                    {daysOfWeek.map((day, dayIndex) => (
                      <td key={dayIndex} className="border border-gray-500 text-lg">
                        {schedule[day][index] || (index === 4 ? 'Lunch Break' : '')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeTableStudent;
