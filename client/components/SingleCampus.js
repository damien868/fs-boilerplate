import React from 'react'
import {connect} from 'react-redux'

class SingleCampus extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        if(!this.props.campus){
             return null
    }
        return(
                <div>
                    <div>{`Name: ${this.props.campus.name}`}</div>
                    <div>{`Address: ${this.props.campus.address}`}</div>
                    <div>{`Image: ${this.props.campus.imageURL}`}</div>
                    <div>{`Description: ${this.props.campus.description}`}</div>
                </div>
            )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return({
        campus:state.campuses.find(campus=>{
            if(campus.id===parseInt(window.location.hash.slice(11))){
                return campus
                }
            })
    })
    
}


export default connect(mapStateToProps)(SingleCampus)