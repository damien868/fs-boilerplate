import React from 'react'
import {connect} from 'react-redux'

 const Students=(props)=>{
     console.log(props)
    return(
        <div>
            <div className='heading'>Student Directory</div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {props.students.map(student=>{
                        return(
                            <tr className='student' key={student.id}>
                                <th><a href={`/#/students/${student.id}`}>{`${student.firstName} ${student.lastName}`}</a></th>
                                <th>{student.email}</th>
                            </tr>
                        )
                    })}  
                </tbody>  
            </table>        
        </div>
    )
}

const mapStateToProps = (state)=>({
    students:state.students,
    campuses:state.campuses
})

export default connect(mapStateToProps)(Students)