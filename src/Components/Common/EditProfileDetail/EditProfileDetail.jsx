

function EditProfileDetail({
  initialValue,
  editableFields,
  onClose,
  onUpdate,
}) {
  // const [formData, setFormData] = useState({ ...initialValue })
 let formData = { name: 'John Doe',
      gender: 'Male',
      fatherName: 'James Doe',
      motherName: 'Mary Doe',
      dateOfBirth: '2005-05-15',
      religion: 'Christian',
      fatherOccupation: 'Engineer',
      email: 'john.doe@example.com',
      admissionDate: '2023-09-01',
      class: '10th',
      section: 'A',
      house: 'Blue',
      rollNo: '101',
      address: '123 Main Street, Cityville',
      phoneNumber: '+1 123-456-7890',
      intro:
        'John is an enthusiastic student with a passion for science and technology.',
    }

    formData = initialValue

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   onUpdate(formData)
  // }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="fixed inset-0 flex items-center justify-center overflow-auto">
          <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Edit Details
              </h3>
              <form>
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key} className="mb-4">
                    <label
                      htmlFor={key}
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      {key}:
                    </label>
                    {editableFields.includes(key) ? (
                      <input
                        type="text"
                        id={key}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    ) : (
                      <input
                        type="text"
                        id={key}
                        name={key}
                        value={value}
                        readOnly
                        className="bg-gray-100 shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      />
                    )}
                  </div>
                ))}
                <div className="flex justify-end">
                  {/* <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Update
                  </button> */}
                  <button
                    type="button"

                    className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileDetail
