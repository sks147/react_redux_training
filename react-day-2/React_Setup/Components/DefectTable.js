import React from 'react';
import TableRow from './TableRow';

class DefectTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defectData: []
        };
        this.changeDefectStatus = this.changeDefectStatus.bind(this);
    }

    // Life cycle of components
    // overriding default methods
    componentWillMount(){
        // - before rendering the component
        // - Will be invoked both on client and server side
        // - executed only once
        // - component will not be available to set the state 
        console.log('1. inside componentWillMount');
    }
    
    componentDidMount(){
        // - after rendering the component
        // - invoked once on client side
        // - invoked immediately after initial render occurs 
        // - have access to all DOM nodes
        // - place to integrate with other JS frameworks, set timers and handling Ajax request
        console.log('3. inside componentDidMount');
        // getting the items from localStorage and setting the state of the component
        var appDefects = JSON.parse(localStorage.getItem('defects'));
        this.setState({
            defectData: appDefects
        });
    }

    componentWillReceiveProps(){
        console.log('inside componentWillReceiveProps');
    }

    shouldComponentUpdate(){
        console.log('4. inside shouldComponentUpdate');
        return false;
        // default is true
    }

    componentWillUpdate(){
        console.log('inside componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('inside componentDidUpdate');
    }

    changeDefectStatus(defectId){
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
        console.log("2. Inside render Method");
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