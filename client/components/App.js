import React from "react"
//import any sub-components
import Campuses from './Campuses'
import Students from './Students'
import Home from './Home'
import axios from 'axios'
import {HashRouter,Route,Link} from 'react-router-dom'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import SingleStudent from "./SingleStudent"

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
// const store=createStore(rootReducer) //createStore expects one argument which is the reducer. 

let initialState={students:[],campuses:[]}
function reducer (state=initialState,action) {
	if(action.type==='UPDATE'){
		//return state
		return {...state,campuses:action.campuses,students:action.students}
	}
	return state
} 
const store=createStore(reducer) //createStore expects one argument which is the reducer. 


export default class App extends React.Component {
	//constructor
	constructor(){
		super()
	}
	//any lifecycle methods
	async componentDidMount(){
        let response=await axios.get(`/campus`)
        const allCampus=response.data
		response=await axios.get(`/student`)
		const allStudent=response.data
		store.dispatch({type:'UPDATE',students:allStudent,campuses:allCampus})
	}
	
	//any custom methods
	//render
	render(){
		return(
			// In order to make store available to componenets, wrap everything in render function with Provider
			// Provider takes one argument which is your store.
			<Provider store={store}> 
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
					</Route> {/*react-router v5 syntax*/}
					<Route path='/campuses/:id'>
						<div className='navbar'>
							<div><Link to='/'>Home</Link></div>
							<div><Link to='/students'>All Students</Link></div>
						</div> 
						<Campuses/> 
					</Route> {/*react-router v5 syntax*/}
					<Route exact path='/students'> 
						<div className='navbar'>
							<div><Link to='/'>Home</Link></div>
							<div><Link to='/campuses'>All Campuses</Link></div>
						</div> 
						<Students/> 
					</Route> {/*react-router v5 syntax*/}
					<Route path='/students/:id'> 
						<div className='navbar'>
							<div><Link to='/'>Home</Link></div>
							<div><Link to='/campuses'>All Campuses</Link></div>
						</div> 
						<SingleStudent/> 
					</Route> {/*react-router v5 syntax*/}
				</HashRouter>
			</Provider>
		)
	}
}
