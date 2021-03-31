import React from 'react'
import {connect} from 'react-redux'

const SingleCampus=({campus})=>{
    console.log(campus)
    if(!campus){
        return null
    }
    return(
            <div>
                <div>{`Name: ${campus.name}`}</div>
                <div>{`Address: ${campus.address}`}</div>
                <div>{`Image: ${campus.imageURL}`}</div>
                <div>{`Description: ${campus.description}`}</div>
            </div>
        )
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