import React, { Component } from 'react';
import DefectTable from './Defecttable'

class App extends Component {
  constructor(props){
    super(props);
    }
  render() {
    return (
      <React.Fragment>
          Baba Tracker
          <DefectTable defectCount={this.props.match.params.count}/>
      </React.Fragment>
    );
  }
}

export default App;
