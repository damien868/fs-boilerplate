import React from 'react'
import {connect} from 'react-redux'
import { deleteStudent } from '../store/store'

 class Students extends React.Component{
     constructor(){
         super()
         this.handleClick=this.handleClick.bind(this)
     }
     handleClick(studentID){
        this.props.deleteStudent(studentID)
     }
    render(){
        return(
            <div>
                <div className='heading'>Student Directory</div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        {this.props.students.map(student=>{
                            return(
                                <tr className='student' key={student.id}>
                                    {/* When you want to pass in params to an event listener function, you need to make an anonymous function
                                    that calls the event listener function. If you don't, the function will just be called at the start */}
                                    <th><button onClick={()=>this.handleClick(student.id)}>X</button><a href={`/#/students/${student.id}`}>{`${student.firstName} ${student.lastName}`}</a></th>
                                    <th>{student.email}</th>
                                </tr>
                            )
                        })}  
                    </tbody>  
                </table>        
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    students:state.students,
    campuses:state.campuses
})
const mapDispatchToProps=(dispatch)=>{
    return {
        deleteStudent:(id)=>{dispatch(deleteStudent(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Students)