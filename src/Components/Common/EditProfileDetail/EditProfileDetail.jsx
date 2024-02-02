import React, { useState } from 'react'
import cutIcon from '../../../assets/cutIcon.svg'

function EditProfileDetail({ heading, link, oldValue, isShow}) {
  let [isVisible, setIsVisible] = useState(isShow)
  console.log(isVisible)
  console.log(oldValue)

  const handleClose = () => {
    console.log(isVisible)
    setIsVisible(false)
  }

  return isVisible ? (
    <div className="p-10 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <p>{heading}</p>
      <form action={link} className="flex gap-5">
        <input type="text" value={oldValue} />
        <button
          type="submit"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1 me-2 dark:focus:ring-yellow-900"
        >
          Update
        </button>
      </form>
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </div>
  ) : null
}

export default EditProfileDetail
