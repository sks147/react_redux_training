import React from 'react';
import TableRow from './TableRow';
import { Table } from 'reactstrap';
import FilterTable from './FilterTable';
class DefectTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defectData: [],
            data: []
        };
        this.changeDefectStatus = this.changeDefectStatus.bind(this);
        this.changeTableState = this.changeTableState.bind(this);
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
            defectData: appDefects,
            data: appDefects
        });
    }

    componentWillReceiveProps(){
        console.log('inside componentWillReceiveProps');
    }

    shouldComponentUpdate(){
        console.log('4. inside shouldComponentUpdate');
        return true;
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

    // filter Defect Table function
    changeTableState(defectCategory){
        console.log('changeTableState running');
        let currentData = this.state.defectData;
        currentData = currentData.filter((item)=>{
            if(item.category == defectCategory){
                return true;
            }
        });
        this.setState({
            defectData: currentData
        });
    }

    render() {
        console.log("2. Inside render Method");
        console.log("From DefectTable : ", this.props.defects);
        <FilterTable></FilterTable>
        var rows = this.state.defectData.map((row, index) => {
            return <TableRow row= {row} index={index} onclick={this.changeDefectStatus}/>
        });

        return (
            <React.Fragment>
                <p>{this.props.defectCount}</p>
                <Table dark striped>
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
                </Table>
                <FilterTable defectData={this.state.defectData} filterDefectTable={this.changeTableState}></FilterTable>
            </React.Fragment>
            
        )
    }
}

export default DefectTable;