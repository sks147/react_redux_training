import React, { Component } from 'react';
import Row from './Row'
import Wrapper from './Wrapper'
class DefectTable extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
    }
    this.getRows = this.getRows.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
}
componentWillMount(){
  console.log("will mount")
}
componentDidMount(){
  console.log("did mount")
 let storeData = JSON.parse(localStorage.getItem("defects"));
 this.setState({
   data:storeData
 });
}


toggleStatus(ind){
  let newArr = this.state.data.map((element,index)=>{
    if(index === ind){
      return { ...element,status:(element.status === 'Open' ? 'Closed': 'Open')}
    }
    else{
      return element
    }
  })
  this.setState({
      data: newArr 
  })
}
getRows(){
  return this.state.data.map((obj,index)=>{
    return  <Row key={index} {...obj} toggleStatus={this.toggleStatus} index={index}/>
  })
}
  render() {
    console.log("in render cou t");
   return (
      <Wrapper>
        <p>{this.props.defectCount}</p>
          <table>
          <tbody>
           <tr>
              <td>Category</td>
              <td>Description</td>
              <td>Priority</td>
              <td>Status</td>
              <td>Change Status</td>
            </tr>
           {this.getRows()}
          </tbody>
          </table>
      </Wrapper>
    );
  }
}

export default DefectTable;
