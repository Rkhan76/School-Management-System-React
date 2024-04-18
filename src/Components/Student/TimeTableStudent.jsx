import React, { useState, useEffect } from 'react';
import { handleGetTimeTableByStudent } from '../../fetching/fetch';

const TimeTableStudent = () => {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await handleGetTimeTableByStudent();
        if (response) {
          // Filtering out the _id field
          const { _id, ...filteredData } = response;
          setSchedule(filteredData);
        } else {
          alert("Data not found for your class");
        }
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }
    };

    fetchData();
  }, []);

  const replaceEmptyWithLunchBreak = (item) => {
    return item === "" ? "Lunch Break" : item;
  };

  return (
    <div>
      <h2>Monday</h2>
      <ul>
        {schedule.Monday.map((item, index) => (
          <li key={index}>{replaceEmptyWithLunchBreak(item)}</li>
        ))}
      </ul>
      
      <h2>Tuesday</h2>
      <ul>
        {schedule.Tuesday.map((item, index) => (
          <li key={index}>{replaceEmptyWithLunchBreak(item)}</li>
        ))}
      </ul>
      
      <h2>Wednesday</h2>
      <ul>
        {schedule.Wednesday.map((item, index) => (
          <li key={index}>{replaceEmptyWithLunchBreak(item)}</li>
        ))}
      </ul>
      
      <h2>Thursday</h2>
      <ul>
        {schedule.Thursday.map((item, index) => (
          <li key={index}>{replaceEmptyWithLunchBreak(item)}</li>
        ))}
      </ul>
      
      <h2>Friday</h2>
      <ul>
        {schedule.Friday.map((item, index) => (
          <li key={index}>{replaceEmptyWithLunchBreak(item)}</li>
        ))}
      </ul>
    </div>
  );

};

export default TimeTableStudent;
