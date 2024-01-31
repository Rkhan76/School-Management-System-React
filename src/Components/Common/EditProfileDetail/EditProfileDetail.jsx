import React, { useState } from 'react'
import cutIcon from '../../../assets/cutIcon.svg'

function EditProfileDetail({heading, link, oldValue}) {
  const [display,setDisplay] = useState('hidden')
  function displayfun(){
    console.log('hllo')
    setDisplay('')
  }

  return (
     <div className={`${display} p-10 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
      <p>{heading}</p>
      <form action="" className="flex gap-5">
        <input type="text" value={oldValue} />
        <button
          type="submit"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1 me-2 dark:focus:ring-yellow-900"
        >
          Update
        </button>
      </form>
      <button type="button" onClick={displayfun()}>Close</button>
    </div>
  )
}

export default EditProfileDetail

