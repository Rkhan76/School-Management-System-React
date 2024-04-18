import React, { useState } from 'react';
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

  const handleInputChange = (day, period, value) => {
    setSchedule(prev => ({
      ...prev,
      [day]: prev[day].map((item, index) => {
        if (index === period) return value;
        return item;
      })
    }));
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

    // Prepare data to send
    const dataToSend = {
      className: className,
      schedule: schedule
    };

    console.log(dataToSend);

    try {
      const response = await axios.post('http://localhost:8000/time-table', dataToSend);
      console.log('Server Response:', response.data);
      alert('Schedule submitted successfully!');
    } catch (error) {
      console.error('Error submitting schedule:', error);
      alert('Failed to submit schedule. Check console for more details.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8">
      <div className="mb-6">
        <label className="block text-lg font-bold text-blue-700 mb-2">Class:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={className}
          onChange={handleClassNameChange}
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
              const isLunch = period === 4; // Lunch after 4 periods
              return (
                <div key={period} className="flex items-center">
                  {isLunch ? (
                    <div className="col-span-4 font-medium text-center my-2">
                      Lunch Break
                    </div>
                  ) : (
                    <React.Fragment>
                      <label className="inline-block w-32 mr-2 font-medium">Period {period + 1}:</label>
                      <input
                        type="text"
                        className="flex-1 p-2 border border-gray-300 rounded"
                        value={value}
                        onChange={(e) => handleInputChange(day, period, e.target.value)}
                      />
                    </React.Fragment>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit Schedule
      </button>
    </form>
  );
}

export default TimeTableAdmin;
