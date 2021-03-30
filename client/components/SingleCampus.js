import React from 'react'
import connect from 'react-redux'

const SingleCampus=(props)=>{
    return()
}


const mapStateToProps = (state)=>({
    students:state.students,
    campuses:state.campuses
})

export default connect(mapStateToProps)(SingleCampus)