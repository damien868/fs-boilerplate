import React from 'react'
import {connect} from 'react-redux'

const SingleStudent=({student})=>{
    if(!student){
        return null
    }
    return(
        <div>
            <div>
                <div>{`Name: ${student.firstName} ${student.lastName}`}</div>
                <div>{`Email: ${student.email}`}</div>
                <div>{`GPA: ${student.gpa}`}</div>
                <div>{`Profile Picture: ${student.imageURL}`}</div>
                <div><a href={`/#/campuses/${student.campusId}`}> {`Campus: ${student.campusInfo}`}</a></div>
            </div>
        </div>
    )
}
//try to refactor window slice(11) with match.params.id.slice(1)
const mapStateToProps = (state,ownProps)=>{
    return{
    student:state.students.find(student=>{
        if(student.id===parseInt(window.location.hash.slice(11))){
            return student
        }
    })
}}
export default connect(mapStateToProps)(SingleStudent)