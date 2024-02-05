import React, { useState } from 'react'

function EditProfileDetail({
  link,
  oldValue,
  heading,
  isShow,
  onClose,
  onUpdate,
}) {
  const [newValue, setNewValue] = useState(oldValue)

  const handleInputChange = (e) => {
    setNewValue(e.target.value)
  }

  return (
    <div
      className={`fixed inset-0 ${isShow ? 'block' : 'hidden'} overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal panel */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="p-6">
            <button
              className="close-btn absolute top-4 right-4"
              onClick={onClose}
            >
              Close
            </button>
            <form onSubmit={(e) => onUpdate(e, newValue)} className="mt-4">
              {/* Include your update form fields here */}
              <label>
                New Value:
                <input
                  type="text"
                  value={newValue}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 mt-2 w-full"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 mt-4 rounded-md hover:bg-blue-600"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileDetail
