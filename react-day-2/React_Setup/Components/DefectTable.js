import React from 'react';
import TableRow from './TableRow';

class DefectTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defectData: this.props.defects
        };
        this.changeDefectStatus = this.changeDefectStatus.bind(this);
    }
    changeDefectStatus(defectId){
        console.log("Inside parent componet for status change calling from child");
        let currentData = this.state.defectData;
        currentData.forEach((item)=>{
            if(defectId == item.id){
                item.status="Closed";
            }
        });
        this.setState({
            defectData: currentData
        });
    }

    render() {
        console.log("From DefectTable : ", this.props.defects);
        var rows = [];
        this.state.defectData.forEach((item, index) => {
            rows.push(
                <TableRow
                    // Each child in an array or iterator
                    // should have a unique "key" prop
                    // used for change detection
                    UniqueId={item.id}
                    key={index}
                    category={item.category}
                    description={item.description}
                    priority={item.priority}
                    status={item.status}
                    onClosing={this.changeDefectStatus}
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