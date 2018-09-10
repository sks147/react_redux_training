import React, { Component } from 'react';

class AddDefect extends Component {
  constructor(props){
    super(props);
    this.state={
        category:'UI',
        description:'',
        priority:'',
        status: 'Open',
    };
    this.addNewDefect =this.addNewDefect.bind(this);
    this.handleChange = this.handleChange.bind(this);
 }
 handleChange(name,value){
     this.setState({
         [name]: value
     })
 }
addNewDefect(event){
    event.preventDefault();
    console.log("state now=",this.state)
    let newDef={
        category: this.refs.category.value,
        description: this.refs.description.value,
        priority: this.refs.priority.value,
        status: 'Open',
    }
    let curData=JSON.parse(localStorage.getItem('defects'));
    curData.push(newDef);
    localStorage.setItem('defects',JSON.stringify(curData));
    this.props.history.push(`/view-defects/${curData.length}`);
}
  render() {
    return (
      <React.Fragment>
          <h1>Add defect</h1>
          <form>
              Category: <select ref="category"  onChange={(e)=>this.handleChange('category',this.refs.category.value)}> 
                  <option value="UI">UI</option>
                  <option value="Functionality">Functionality</option>
                  <option value="Change Request">Change Request</option>
              </select><br/><br/>
              Description:<textarea ref="description"  onChange={(e)=>this.handleChange('description',this.refs.description.value)}></textarea><br/><br/>
              Priority: <input ref="priority"  type="number" min="1" max="3" onChange={(e)=>this.handleChange('priority',this.refs.priority.value)}/><br/><br/>
              <button ref="submit" onClick={this.addNewDefect}>Add Defect</button>  
          </form>  
      </React.Fragment>
    );
  }
}

export default AddDefect;
