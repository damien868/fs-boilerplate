import React from "react"
//import any sub-components
import Campuses from './Campuses'
import Students from './Students'
import axios from 'axios'

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
		response=await axios.get(`/students`)
        const allStudent=response.data
        this.setState({students:allStudent})
    }
	//any custom methods
	//render
	render(){
		return(
			<div>
				hello world 2
				<Campuses campuses={this.state.campuses}/>
				<Students students={this.state.students}/>
			</div>
		)
	}
}
