import React from 'react'
// import styles from '../App.css'

function StudentCard(props) {
  return (
    <div>
      <ul>
        {props.studentData.map(student => {
          return <li className="studentCard" key='student._id'>
            <p>Name: {student.name}</p>
            <p>Current Block: {student.currentBlock}</p>
          </li>
        })}
      </ul>
    </div>
  )
}

export default StudentCard;