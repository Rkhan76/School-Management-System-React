import React from 'react'

function EditProfileDetail({
  link,
  oldValue,
  heading,
  isShow,
  onClose,
  onUpdate,
}) {
  return (
    <div className={`update-profile ${isShow ? 'show' : 'hide'}`}>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <form onSubmit={onUpdate}>
        {/* Include your update form fields here */}
        <label>
          New Value:
          <input
            type="text"
            value={oldValue}
            onChange={(e) => console.log(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default EditProfileDetail
