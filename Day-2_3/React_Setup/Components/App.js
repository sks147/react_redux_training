import React, {Component} from 'react';
import DefectTable from './DefectTable'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        console.log("From app component", this.props.data);
        console.log('default props', this.props);
        return ( 
            <div>
                <h1>Defect Table</h1>
                <DefectTable defectCount={this.props.match.params.count}/>
            </div>
           
        )
    }
}

export default App;