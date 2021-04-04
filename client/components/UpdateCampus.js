import React from 'react'
import {connect} from 'react-redux'
import {updateCampus} from '../store/store'

class UpdateCampus extends React.Component{
    constructor(){
        super()
        this.state={
            campusName:'',
            campusAddress:'',
            campusImage:'',
            campusDescription:'',
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
        this.props.updateCampus(this.state.campusName,this.state.campusAddress,
            this.state.campusDescription,this.state.campusImage,parseInt(window.location.hash.slice(11)))
    }
    render(){
        return(
            <form>
                <div>Update Campus Info</div>
                <label>Name:</label>
                <input type='text' name='campusName' onChange={this.handleChange}></input>
                <label>Address:</label>
                <input type='text' name='campusAddress' onChange={this.handleChange}></input>
                <label>Image:</label>
                <input type='text' name='campusImage' onChange={this.handleChange}></input>
                <label>Description:</label>
                <input type='text' name='campusDescription' onChange={this.handleChange}></input>
                <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updateCampus: (name,address,description,image,id)=>dispatch(updateCampus(name,address,description,image,id))
    }
}
export default connect(null,mapDispatchToProps)(UpdateCampus)