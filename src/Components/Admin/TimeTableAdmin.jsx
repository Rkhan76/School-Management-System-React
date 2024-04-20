import React, { useState, useEffect } from 'react';
import axios from 'axios';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function TimeTableAdmin() {
  const [className, setClassName] = useState('');
  const [schedule, setSchedule] = useState({
    Monday: new Array(8).fill(''),
    Tuesday: new Array(8).fill(''),
    Wednesday: new Array(8).fill(''),
    Thursday: new Array(8).fill(''),
    Friday: new Array(8).fill('')
  });
  const [openModal, setOpenModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [timetableData, setTimetableData] = useState(null);

  const classArray = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    if (selectedClass) {
      axios.get(`http://localhost:8000/time-table?class=${selectedClass}`)
        .then(response => {
          console.log(response.data);
          setTimetableData(response.data.schedule);
          console.log("here is the data of timetable",response.data.schedule)
          // Set the fetched timetable data to the schedule state
          setSchedule(response.data.schedule);
        })
        .catch(error => {
          console.error('Error fetching timetable:', error);
        });
    }
  }, [selectedClass]);

  const studentClasses = classArray.map((studentClass) => (
    <option value={studentClass} key={studentClass}>
      {studentClass}
    </option>
  ));

  const handleClassSelect = (event) => {
    const selectedClass = event.target.value;
    setSelectedClass(selectedClass);
    setSchedule({
      Monday: new Array(8).fill(''),
      Tuesday: new Array(8).fill(''),
      Wednesday: new Array(8).fill(''),
      Thursday: new Array(8).fill(''),
      Friday: new Array(8).fill('')
    });
  };

  const handleClassNameChange = (event) => {
    setClassName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!className || className === "select the class") {
      alert('Please select a class before submitting.');
      return;
    }

    // Check if any input is empty
    const isEmpty = Object.values(schedule).some(daySchedule =>
      daySchedule.slice(0, 4).some(period => !period.trim())
    );

    if (isEmpty) {
      alert('Please fill in all schedule fields before submitting.');
      return;
    }

    // Prepare data to send
    const dataToSend = {
      className: className,
      schedule: schedule
    };

    console.log(dataToSend);

    try {
      const response = await axios.post('http://localhost:8000/time-table', dataToSend);
      console.log('Server Response:', response.data);
      if (response.status === 201) {
        alert('Schedule submitted successfully!');
        // Clear form data
        setClassName('');
        setSchedule({
          Monday: new Array(8).fill(''),
          Tuesday: new Array(8).fill(''),
          Wednesday: new Array(8).fill(''),
          Thursday: new Array(8).fill(''),
          Friday: new Array(8).fill('')
        });
        // Reset timetable data
        setTimetableData(null);
        setSelectedClass('');
        setOpenModal(false);
      } else {
        alert('Failed to submit schedule. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting schedule:', error);
      alert('Failed to submit schedule. Check console for more details.');
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="m-10 bg-gray-400 rounded-md">
        <h1 className="p-5 text-3xl">Student Result</h1>
        <div className="p-4">
          <label className="p-4 text-lg" htmlFor="Session">
            Select Class
          </label>
          <select
            className="p-2 w-60 rounded-sm outline-none"
            onChange={handleClassSelect}
            value={selectedClass}
          >
            <option value="">Select Class</option>
            {studentClasses}
          </select>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-bold mb-4 text-center">Timetable</h2>
        {timetableData && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-500 table-fixed">
              <thead>
                <tr>
                  <th className="border border-gray-500"></th>
                  {daysOfWeek.map((day, index) => (
                    <th key={index} className="border border-gray-500">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }).map((_, index) => (
                  <tr key={index}>
                    <td className="border border-gray-500">Period {index + 1}</td>
                    {daysOfWeek.map((day, dayIndex) => (
                      <td key={dayIndex} className="border border-gray-500">
                        {schedule[day][index] || (index === 4 ? 'Lunch Break' : '')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <button onClick={() => setOpenModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 block mx-auto">
          Update Timetable
        </button>
        {openModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-11/12 max-w-4xl h-5/6 overflow-y-auto">
              <div className="flex justify-end mb-4">
                <button onClick={() => setOpenModal(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h2 className="text-lg font-bold mb-4">Update Timetable</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-lg font-bold text-blue-700 mb-2">Class:</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={className}
                    onChange={handleClassNameChange}
                    required
                  >
                    <option value="">select the class</option>
                    {[...Array(10).keys()].map(num => (
                      <option key={num} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>
                {daysOfWeek.map(day => (
                  <div key={day} className="mb-6">
                    <h3 className="font-bold text-lg mb-2 text-blue-700">{day}</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {schedule[day].map((value, period) => {
                        return (
                          <div key={period} className="flex items-center">
                            <label className="inline-block w-32 mr-2 font-medium">
                              {period === 4 ? 'Lunch Break' : `Period ${period + 1}:`}
                            </label>
                            <input
                              type="text"
                              className="flex-1 p-2 border border-gray-300 rounded mr-4"
                              value={value}
                              onChange={(e) => setSchedule(prevSchedule => ({
                                ...prevSchedule,
                                [day]: prevSchedule[day].map((item, index) => {
                                  if (index === period) return e.target.value;
                                  return item;
                                })
                              }))}
                              required={!value && period !== 4}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="flex justify-end">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit Schedule
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeTableAdmin;
