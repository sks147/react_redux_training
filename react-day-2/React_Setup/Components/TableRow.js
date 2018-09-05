import React from 'react';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types';
// Stateless component
const TableRow = (props) => {
    return (
        <tr>
            <td>{props.category}</td>
            <td>{props.description}</td>
            <td>{props.priority}</td>
            <td>{props.status}</td>
            <td><button onClick={() => { props.onClosing(props.UniqueId); }}> Change Status </button></td>
        </tr>
    )
}

// defaultProps available in es6
TableRow.defaultProps = {
    category: 'General'
}

// using prop-types package
TableRow.propTypes = {
    category: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.number,
    status: PropTypes.string
}

export default TableRow;