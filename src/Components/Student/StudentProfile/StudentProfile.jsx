import React from "react";
import profileImage from '../../../assets/profileImage.png'

function StudentProfile(){
    const student = {
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
      gender: 'Male',
      grade: 'A',
      subjects: ['Mathematics', 'English', 'Science'],
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'State',
        zipCode: '12345',
      },
      contact: {
        email: 'john.doe@example.com',
        phone: '555-1234',
      },
    }

    return (
      <div className="m-20 p-10 box-border rounded-md bg-slate-400 bg-green-700">
        <div className="flex gap-10">
          <img src={profileImage} className="h-28 w-28" alt="profileImage" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur
            adipisicfsdfsdfsdfkjsdfksjfkdsfjsdkfjklfjdkfskfjdskfjsdfksdjfkldsfjdslkfjfkldsjflkdsfjsdlking
            elit. Sequi adipisci expedita provident aliquam dignissimos
            cupiditate amet sunt voluptatibus enim eveniet? Quas eveniet rerum
            praesentium, eum iusto possimus placeat minima. At.
          </p>
        </div>
        <table>
          <tr>
            <td>Name</td>
            <td>{student.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{student.lastName}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{student.age}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{student.firstName}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{student.firstName}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{student.firstName}</td>
          </tr>
        </table>
      </div>
    )
}

export default StudentProfile