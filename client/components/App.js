import React from "react"
//import any sub-components
import Campuses from './Campuses'
import Students from './Students'
import Home from './Home'
import axios from 'axios'
import {HashRouter,Route,Link} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

function reducer () {}
const store=createStore(reducer)

export default class App extends React.Component {
	//constructor to initialize state
	constructor(){
		super()
		this.state={
			campuses:[],
			students:[]
		}
	}
	//any lifecycle methods
	async componentDidMount(){
        let response=await axios.get(`/campus`)
        const allCampus=response.data
		response=await axios.get(`/student`)
        const allStudent=response.data
        this.setState({students:allStudent,campuses:allCampus})
    }
	//any custom methods
	//render
	render(){
		return(
			<Provider store={store}>
				<HashRouter>
					<Route exact path='/'>
						<div className='navbar'>
							<div><Link to='/campuses'>Campuses</Link></div>
							<div><Link to='/students'>Students</Link></div>
						</div>
						<Home/>
					</Route>
					<Route path='/campuses'>
						<div className='navbar'>
							<div><Link to='/'>Home</Link></div>
							<div><Link to='/students'>Students</Link></div>
						</div> 
						<Campuses campuses={this.state.campuses}/> 
					</Route> {/*react-router v5 syntax*/}
					<Route path='/students'> 
						<div className='navbar'>
							<div><Link to='/'>Home</Link></div>
							<div><Link to='/campuses'>Campuses</Link></div>
						</div> 
						<Students students={this.state.students}/> 
					</Route> {/*react-router v5 syntax*/}
				</HashRouter>
			</Provider>
		)
	}
}
