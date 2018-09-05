import React, {Component} from 'react'

class SecondComponent extends Component {
	render(){
		return (
			<h1>
				Second COmponent: {this.props.ctrval}
			</h1>
		);
	}
}

export default SecondComponent;