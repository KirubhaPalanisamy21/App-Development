import React from 'react';
import './Table.css'; // Import the CSS file
// ... (Rest of the component remains the same)

const students = [
  {
    name: 'John Doe',
    ID: '0101',
    Admin: 'Rajesh',
    gender: 'Male',
    mobileNumber: '1234567890',
    address: '123 Main St, City',
    Place:'Singapore',
  },

  {
    name: 'Alice Johnson',
    ID: '0102',
    Admin: 'Priya',
    gender: 'Female',
    mobileNumber: '5555555555',
    address: '789 Oak St, Village',
    Place:'France',
  },
  {
    name: 'Eva Davis',
    Id: '0103',
    Admin: 'Resham',
    gender: 'Female',
    mobileNumber: '7777777777',
    address: '555 Maple St, Countryside',
    Place:'Russia',
  },
  {
    name: 'Chris Wilson',
    Id: '0104',
    Admin: 'Ramesh',
    gender: 'Male',
    mobileNumber: '6666666666',
    address: '222 Cedar St, Town',
    Place:'Netherlands',
  }
  // Add more student data here
];

const Studentprofile = () => {
  return (
    <div>
    
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Admin</th>
          <th>Gender</th>
          <th>Mobile Number</th>
          <th>Address</th>
          <th>Place</th>
          
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.Id}</td>
            <td>{student.Admin}</td>
            <td>{student.gender}</td>
            <td>{student.mobileNumber}</td>
            <td>{student.address}</td>
            <td>{student.Place}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Studentprofile;