import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {setCretendials} from "../../Auth/auth"
import schoolbackground from "../../assets/schoolbackground.jpg"

function SignIn() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleSignIn = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
  

    try {
      const response = await fetch('http://localhost:8000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const responseData = await response.json()
        const {role, email, token} = responseData
        console.log("here on sigin page :", email)
        if(token && role && email) setCretendials(role, email, token)
        navigate(`/${role}`)
      } else {
        const errorData = await response.json()
        setError(errorData.message)
      }
    } catch (error) {
      console.error('Error occurred during sign-in:', error)
      setError('An error occurred during sign-in. Please try again.')
    }
  }


  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <>
    <div className="flex min-h-screen">
      {/* Image Container */}
      <div className="w-1/2 flex justify-center items-center bg-gray-100">
        <img src={schoolbackground} alt="School Background" className="w-full h-full" />
      </div>
  
      {/* Form Container */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form onSubmit={handleSignIn} className="mt-8 space-y-6" method="POST">
            {/* Form fields and other elements */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            {/* Additional form elements */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center text-sm">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  
    // </div>
  )
}

export default SignIn
