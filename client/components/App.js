import React from "react"
//import any sub-components
import Campuses from './Campuses'
import Students from './Students'
export default class App extends React.Component {
	//constructor to initialize state
	constructor(){
		super()
		this.state={}
	}
	//any lifecycle methods
	//any custom methods
	//render
	render(){
		return(
			<div>
				hello world 2
				<Campuses/>
				<Students/>
			</div>
		)
	}
}
