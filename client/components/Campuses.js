import React from 'react'
import {connect} from 'react-redux'
import {deleteCampus} from '../store/store'


 class Campuses extends React.Component {
        constructor(){
            super()
            this.handleClick=this.handleClick.bind(this)
        }
        handleClick(campusID){
            this.props.deleteCampus(campusID)
        }
        render(){
            return(
                this.props.campuses ?
                <div>
                    <div className='heading'>Campus Directory</div>
                <table>
                    <tbody>
                        <tr>
                            <th>Campus Name</th>
                            <th>Campus Address</th>
                        </tr>
                        {this.props.campuses.map(campus=>{
                            return(
                                <tr className='campus' key={campus.id}>
                                    <th ><button onClick={()=>this.handleClick(campus.id)}>X</button><a href={`/#/campuses/${campus.id}`}>{campus.name}</a></th>
                                    <th>{campus.address}</th>
                                </tr>
                            )
                        })}    
                    </tbody>            
                </table>
            </div>                 
        : <div>Loading</div>)   
    }
}
const mapStateToProps = (state)=>({
    students:state.students,
    campuses:state.campuses
})
const mapDispatchToProps=(dispatch)=>{
    return {
        deleteCampus:(id)=>{dispatch(deleteCampus(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Campuses)