import React from 'react'
import {connect} from 'react-redux'
import { createCampus } from '../store/store'

class NewCampus extends React.Component{
    constructor(){
        super()
        this.state={
            campusName:'',
            campusAddress:'',
            campusDescription:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
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
        this.props.createCampus(this.state.campusName,this.state.campusAddress,this.state.campusDescription)
        this.setState({ //asynchronous which may executre faster than console.log() try something also async like a thunk
            campusName:'',
            campusAddress:'',
            campusDescription:''
        })
    }
    render(){
        return(
            <div>
                <form className='newEntry' onSubmit={this.handleSubmit}>
                    <label>Campus Name:</label> 
                    <input type='text' name='campusName' onChange={this.handleChange}></input>
                    <label>Campus Address:</label>
                    <input type='text' name='campusAddress' onChange={this.handleChange}></input>
                    <label>Campus Description:</label>
                    <input type='text' name='campusDescription' onChange={this.handleChange}></input>
                    <button type='submit'>Add New Campus</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return(
        {
            createCampus:(campusName,campusAddress,campusDescription)=>{
                dispatch(createCampus(campusName,campusAddress,campusDescription)) //dispatch the dispatch function from store thunk
            }
        }
    )
}
export default connect(null,mapDispatchToProps)(NewCampus)