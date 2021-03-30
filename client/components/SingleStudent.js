import React from 'react'
import {connect} from 'react-redux'

const SingleStudent=(props)=>{
    return(
        <div>
            {console.log(props.students)}
            {props.students.filter(student=>{
                if(student.id===parseInt(window.location.hash.slice(11))){
                    return student
                }
            }).map(student=>{
                return(
                    <div>
                        <div>{`Name: ${student.firstName} ${student.lastName}`}</div>
                        <div>{`Email: ${student.email}`}</div>
                        <div>{`GPA: ${student.gpa}`}</div>
                        <div>{`Profile Picture: ${student.imageURL}`}</div>
                        <div><a href={`/#/campuses/${student.campusId}`}> {`Campus: ${student.campusInfo}`}</a></div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state)=>({
    students:state.students,
    campuses:state.campuses
})
export default connect(mapStateToProps)(SingleStudent)