import React, {Component} from 'react';
import DefectTable from './DefectTable'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        console.log("From app component", this.props.data);
        return ( 
            <div>
                <h1>Defect Table</h1>
                <DefectTable defects={this.props.data}/>
            </div>
           
        )
    }
}

export default App;