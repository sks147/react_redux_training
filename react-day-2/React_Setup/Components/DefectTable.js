import React from 'react';
import TableRow from './TableRow';

class DefectTable extends React.Component {
        render() {
        console.log("From DefectTable : ", this.props.defects);
        var rows = [];
        this.props.defects.forEach((item, index) => {
            rows.push(
                <TableRow 
                    // Each child in an array or iterator
                    // should have a unique "key" prop
                    // used for change detection
                    key = {index}
                    category={item.category}
                    description={item.description}
                    priority={item.priority}
                    status={item.status}
                />
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                    {/* <TableRow /> */}
                </tbody>
            </table>
        )
    }
}

export default DefectTable;