import React, { Component } from 'react'
import axios from 'axios'
import StudentCard from './StudentCard'

class currentStudents extends Component {
  state = {
    studentData: []
  }

  getCurrentStudents = () => {
    axios.get('https://nc-student-tracker.herokuapp.com/api/students?graduated=false')
      .then(res => {
        this.setState({ studentData: res.data.students })
      })
  }

  render() {
    return (
      <div>
        <StudentCard studentData={this.state.studentData} />

      </div>
    )
  }

  componentDidMount() {
    this.getCurrentStudents()
  }
}

export default currentStudents;