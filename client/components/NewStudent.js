import React from 'react'
import {connect} from 'react-redux'
import {createStudent} from '../store/store'

class NewStudent extends React.Component{
    constructor(){
        super()
        this.state={
            studentFirstName:'',
            studentLastName:'',
            studentEmail:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState(
            {
                [evt.target.name]:evt.target.value
            }
        )
    }
    handleSubmit(evt){
        evt.preventDefault()
        this.props.createStudent(this.state.studentFirstName,this.state.studentLastName,this.state.studentEmail)
        this.setState({
            studentFirstName:'',
            studentLastName:'',
            studentEmail:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input type='text' name='studentFirstName' onChange={this.handleChange}></input>
                    <label>Last Name:</label>
                    <input type='text' name='studentLastName' onChange={this.handleChange}></input>
                    <label>Student Email:</label>
                    <input type='text' name='studentEmail' onChange={this.handleChange}></input>
                    <button type='submit'>Add Student</button>
                </form>
            </div>
        )
    }
}



const mapDispatchToProps=(dispatch)=>({
    createStudent:(studentFirstName,studentLastName,studentEmail)=>{dispatch(createStudent(studentFirstName,studentLastName,studentEmail))}
})
export default connect(null,mapDispatchToProps)(NewStudent)