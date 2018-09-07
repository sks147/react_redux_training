import React, { Component } from 'react';
import PropTypes from 'prop-types';
 const Row =(props)=>{
        //   this.toggleStatus = this.toggleStatus.bind(this);
        function toggleStatus(index){
           props.toggleStatus(index)
        }
        return     ( <tr>
                          <td>{props.category}</td>
                          <td>{props.description}</td>
                          <td>{props.priority}</td>
                          <td>{props.status}</td>
                          <td><button onClick={(e)=>{toggleStatus(props.index)}}>change it</button></td>
                        </tr>)
        
}

Row.defaultProps ={
    category: 'bhaukal'
}
Row.propTypes = {
  category: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
}
export default Row;