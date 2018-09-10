import React from 'react';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
// Stateless component
const TableRow = (props) => {
    var row = props.row;
    return (
        <tr>
            <td>{row.category}</td>
            <td>{row.description}</td>
            <td>{row.priority}</td>
            <td>{row.status}</td>
            <td><Button color="danger"onClick={() => {
                props.onclick(props.index);
            }}>Change Status</Button></td>
        </tr>
    )
}

// defaultProps available in es6
TableRow.defaultProps = {
    row : {
        category: 'General',
        description: 'Default Description',
        priority: 0,
        status: 'Open'
    },
    index: 0
}

// using prop-types package
TableRow.propTypes = {
    row: PropTypes.object,
    index: PropTypes.number
}

export default TableRow;