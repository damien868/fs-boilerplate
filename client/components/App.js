import React from "react"
//import any sub-components
import Campuses from './Campuses'
import Students from './Students'
import axios from 'axios'
import {HashRouter,Route,Link} from 'react-router-dom'

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
		this.setState({campuses:allCampus})
		response=await axios.get(`/student`)
        const allStudent=response.data
        this.setState({students:allStudent})
    }
	//any custom methods
	//render
	render(){
		return(
			<HashRouter>
				<div>
					Welcome to Educational Database
					<Route path='/campuses'> <Campuses campuses={this.state.campuses}/> </Route> {/*react-router v5 syntax*/}
					<Route path='/students'> <Students students={this.state.students}/> </Route> {/*react-router v5 syntax*/}
				</div>
			</HashRouter>
		)
	}
}
