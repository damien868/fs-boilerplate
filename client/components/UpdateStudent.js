import React from 'react'
import {connect} from 'react-redux'
import {updateStudent} from '../store/store'

class UpdateCampus extends React.Component{
    constructor(){
        super()
        this.state={
            studentFirstName:'',
            studentLastName:'',
            studentEmail:'',
            studentProfilePicture:'',
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault()
        this.props.updateStudent(this.state.studentFirstName,this.state.studentLastName,
            this.state.studentEmail,this.state.studentProfilePicture,parseInt(window.location.hash.slice(11)))
    }
    render(){
        return(
            <form>
                <div>Update Campus Info</div>
                <label>First Name:</label>
                <input type='text' name='studentFirstName' onChange={this.handleChange}></input>
                <label>Last Name:</label>
                <input type='text' name='studentLastName' onChange={this.handleChange}></input>
                <label>Address:</label>
                <input type='text' name='studentEmail' onChange={this.handleChange}></input>
                <label>Image:</label>
                <input type='text' name='studentProfilePicture' onChange={this.handleChange}></input>
                <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updateStudent: (firstName,lastName,email,profilePicture,id)=>dispatch(updateStudent(firstName,lastName,email,profilePicture,id))
    }
}
export default connect(null,mapDispatchToProps)(UpdateCampus)