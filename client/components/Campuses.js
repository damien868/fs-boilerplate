import React from 'react'
import {connect} from 'react-redux'



 class Campuses extends React.Component {
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
                                    <th ><button>X</button><a href={`/#/campuses/${campus.id}`}>{campus.name}</a></th>
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

export default connect(mapStateToProps)(Campuses)