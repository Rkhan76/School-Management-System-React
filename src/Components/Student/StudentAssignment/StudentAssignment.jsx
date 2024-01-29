import React from 'react'

function StudentAssignment() {
  const assignments = [
    { subject: 'english', teacher: 'miss monika', task: 'hello' },
    { subject: 'math', teacher: 'mr. smith', task: 'solve equations' },
    {
      subject: 'history',
      teacher: 'ms. jones',
      task: 'research a historical event',
    },
  ]

const assignmentCode = assignments.map((assignment,index)=>(
    <div className='m-10 p-10 rounded-md bg-orange-700' key={index}>
        <p>Assignment: {index+1}</p>
        {Object.entries(assignment).map(([key,value])=>(
            <p>{key} : {value}</p>
        ))}
    </div>
))

  return (
      <div>
        {assignmentCode}
        </div>
    
  )
}

export default StudentAssignment
