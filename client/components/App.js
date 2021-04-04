import React from "react"
//import any sub-components
import Campuses from './Campuses'
import Students from './Students'
import Home from './Home'
import {HashRouter,Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import SingleStudent from "./SingleStudent"
import SingleCampus from "./SingleCampus"
import {getStudents,getCampuses} from '../store/store'
import NewCampus from './NewCampus'
import NewStudent from './NewStudent'
import UpdateCampus from './UpdateCampus'

//reducer function tells you what the initial state of the store is
// reducer is given two arguments, state and action
//You should first try to define initial state outside of reducer function
// let initialStudentState={students:[]}
// let initialCampusState={campuses:[]}
// const studentReducer=(state=initialStudentState,action)=>{
// 	console.log(action)
// 	if(action.type==='UPDATE'){
// 		//return a copy of the state and then update that copy with values passed into action
// 		console.log('hello there')
// 		return {...state,students:action.students}
// 	}
// 	return state
// }
// const campusReducer=(state=initialCampusState,action)=>{
	
// 	if(action.type==='UPDATE'){
// 		//return a copy of the state and then update that copy with values passed into action
// 		return {...state,campuses:action.campuses}
// 	}
// 	return state
// }
// const rootReducer=combineReducers({
// 	students:studentReducer,
// 	campuses:campusReducer
// })
// const store=createStore(rootReducer) //createStore expects two arguments which is the reducer and then the middleware which is usually thunks. 

// let initialState={students:[],campuses:[]}
// function reducer (state=initialState,action) {
// 	if(action.type==='UPDATE'){
// 		//return state
// 		return {...state,campuses:action.campuses,students:action.students}
// 	}
// 	return state
// } 
// const store=createStore(reducer) //createStore expects one argument which is the reducer. 


class App extends React.Component {
	//constructor
	constructor(){
		super()
	}
	//any lifecycle methods
	async componentDidMount(){
		this.props.getStudents()
		this.props.getCampuses()
	}
	
	//any custom methods
	//render
	render(){
		return(
			// In order to make store available to componenets, wrap everything in render function with Provider
			// Provider takes one argument which is your store.
		
				<HashRouter>
					<Route exact path='/'>
						<div className='navbar'>
							<div><Link to='/campuses'>All Campuses</Link></div>
							<div><Link to='/students'>All Students</Link></div>
						</div>
						<Home/>
					</Route>
					<Route exact path='/campuses'>
						<div className='navbar'>
							<div><Link to='/'>Home</Link></div>
							<div><Link to='/students'>All Students</Link></div>
						</div> 
						<Campuses/>
						<NewCampus/> 
					</Route> {/*react-router v5 syntax*/}
					<Route path='/campuses/:id'>
						<div className='navbar'>
							<div><Link to='/'>Home</Link></div>
							<div><Link to='/students'>All Students</Link></div>
						</div> 
						<SingleCampus/> 
						<UpdateCampus/> 
					</Route> {/*react-router v5 syntax*/}
					<Route exact path='/students'> 
						<div className='navbar'>
							<div><Link to='/'>Home</Link></div>
							<div><Link to='/campuses'>All Campuses</Link></div>
						</div> 
						<Students/> 
						<NewStudent/>
					</Route> {/*react-router v5 syntax*/}
					<Route path='/students/:id'> 
						<div className='navbar'>
							<div><Link to='/'>Home</Link></div>
							<div><Link to='/campuses'>All Campuses</Link></div>
						</div> 
						<SingleStudent/>
					</Route> {/*react-router v5 syntax*/}
				</HashRouter>
		)
	}
}

const mapDispatchToProps=(dispatch)=>{ //returns object which contains list of functions
	return {
		getStudents:()=>{dispatch(getStudents())},
		getCampuses:()=>{dispatch(getCampuses())},
	}
}
export default connect(null,mapDispatchToProps)(App) // App will only connect once you export it so you cannot use Provider here