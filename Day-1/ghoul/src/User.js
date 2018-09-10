import React, {Component} from 'react';


const User=(props)=>{
	return(
		<div>
			Id : {props.Id} <br/>
			Name : {props.name} 
			{props.children}<br/>
			Email : {props.email}
			<hr/>
		</div>
	);
}
/*
class User extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(<li>
			Id : {this.props.Id},
			name : {this.props.name}, 
			email : {this.props.email}
			</li>);
	}
}
*/
export default User;