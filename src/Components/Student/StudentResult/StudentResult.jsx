import React from 'react'

function StudentResult() {
  const sessionArray = [2000, 2001, 2001]

  const sessions = sessionArray.map((session) => {
    return <option value={session}>{session}</option>
  })
  
 const subjectMarks = {
   1: {
     subject: 'Math',
     subjectCode: 'MTH101',
     midTerm: {
       mo: '16',
       tm: '30',
     },
     finalTerm: {
       mo: '56',
       tm: '70',
     },
   },
   2: {
     subject: 'English',
     subjectCode: 'ENG201',
     midTerm: {
       mo: '22',
       tm: '35',
     },
     finalTerm: {
       mo: '65',
       tm: '80',
     },
   },
   3: {
     subject: 'Science',
     subjectCode: 'SCI301',
     midTerm: {
       mo: '18',
       tm: '30',
     },
     finalTerm: {
       mo: '50',
       tm: '60',
     },
   },
   4: {
     subject: 'History',
     subjectCode: 'HIS401',
     midTerm: {
       mo: '25',
       tm: '35',
     },
     finalTerm: {
       mo: '45',
       tm: '50',
     },
   },
   5: {
     subject: 'Computer Science',
     subjectCode: 'CSC501',
     midTerm: {
       mo: '30',
       tm: '40',
     },
     finalTerm: {
       mo: '55',
       tm: '70',
     },
   },
   6: {
     subject: 'Art',
     subjectCode: 'ART601',
     midTerm: {
       mo: '15',
       tm: '20',
     },
     finalTerm: {
       mo: '40',
       tm: '50',
     },
   },
 }

    const tableRows = Object.keys(subjectMarks).map((subjectId) => {
      const subjectData = subjectMarks[subjectId]
      return (
        <tr key={subjectId}>
          <td key={`${subjectId}-sn`}>{subjectId}</td>
          <td key={`${subjectId}-code`}>{subjectData.subjectCode}</td>
          <td key={`${subjectId}-name`}>{subjectData.subject}</td>
          <td key={`${subjectId}-mid-mo`}>{subjectData.midTerm.mo}</td>
          <td key={`${subjectId}-mid-tm`}>{subjectData.midTerm.tm}</td>
          <td key={`${subjectId}-final-mo`}>{subjectData.finalTerm.mo}</td>
          <td key={`${subjectId}-final-tm`}>{subjectData.finalTerm.tm}</td>
        </tr>
      )
    })


  return (
    <div>
      <div className="m-10 bg-gray-400 rounded-md">
        <h1 className="p-5 text-3xl">Student Result</h1>
        <div className="p-4">
          <label className="p-4 text-lg" htmlFor="Session">
            Select Session
          </label>
          <select className="p-2 w-60 rounded-sm outline-none">
            {sessions}
          </select>
        </div>
      </div>
      <table className="attendance-table">
        <tbody>
          <tr>
            <th rowSpan={2}>S.N</th>
            <th rowSpan={2}>Subject Code</th>
            <th rowSpan={2}>Subject</th>
            <th colSpan={2}>Mid Terms</th>
            <th colSpan={2}>Final Term</th>
          </tr>
          <tr>
            <th>mo</th>
            <th>tm</th>
            <th>mo</th>
            <th>tm</th>
          </tr>
          {tableRows}
          <tr>
            <td colSpan={3}>Total</td>
            <td>55</td>
            <td>100</td>
            <td>470</td>
            <td>500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StudentResult
