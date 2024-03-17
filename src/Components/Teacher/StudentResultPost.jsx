


// const Form = () => {
//   const [formData, setFormData] = useState({
//     year: '',
//     email: '',
//     studentClass: '',
//     result: [
//       {
//         subjectName: '',
//         subjectCode: '',
//         internalMarks: '',
//         externalMarks: '', // New field
//         totalInternalMarks: '',
//         totalExternalMarks: '', // New field
//       },
//     ],
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleResultChange = (index, e) => {
//     const { name, value } = e.target
//     const updatedResult = [...formData.result]
//     updatedResult[index][name] = value
//     setFormData({
//       ...formData,
//       result: updatedResult,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Send formData to your backend
//     console.log(formData)
//     // You can add fetch or axios here to send the formData to your backend API
//   }

//   const addSubject = () => {
//     setFormData({
//       ...formData,
//       result: [
//         ...formData.result,
//         {
//           subjectName: '',
//           subjectCode: '',
//           internalMarks: '',
//           externalMarks: '', // New field
//           totalInternalMarks: '',
//           totalExternalMarks: '', // New field
//         },
//       ],
//     })
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="year">Year:</label>
//         <input
//           type="number"
//           id="year"
//           name="year"
//           value={formData.year}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="studentClass">Class:</label>
//         <input
//           type="number"
//           id="studentClass"
//           name="studentClass"
//           value={formData.studentClass}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <h3>Results:</h3>
//       {formData.result.map((subject, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             name="subjectName"
//             placeholder="Subject Name"
//             value={subject.subjectName}
//             onChange={(e) => handleResultChange(index, e)}
//             required
//           />
//           <input
//             type="text"
//             name="subjectCode"
//             placeholder="Subject Code"
//             value={subject.subjectCode}
//             onChange={(e) => handleResultChange(index, e)}
//             required
//           />
//           <input
//             type="number"
//             name="internalMarks"
//             placeholder="Internal Marks"
//             value={subject.internalMarks}
//             onChange={(e) => handleResultChange(index, e)}
//             required
//           />
//           <input
//             type="number"
//             name="externalMarks"
//             placeholder="External Marks" // New field
//             value={subject.externalMarks}
//             onChange={(e) => handleResultChange(index, e)}
//             required
//           />
//           <input
//             type="number"
//             name="totalInternalMarks"
//             placeholder="Total Internal Marks"
//             value={subject.totalInternalMarks}
//             onChange={(e) => handleResultChange(index, e)}
//             required
//           />
//           <input
//             type="number"
//             name="totalExternalMarks"
//             placeholder="Total External Marks" // New field
//             value={subject.totalExternalMarks}
//             onChange={(e) => handleResultChange(index, e)}
//             required
//           />
//         </div>
//       ))}
//       <button type="button" onClick={addSubject}>
//         Add Subject
//       </button>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// export default Form
