import React from 'react';
import Wrapper from './Wrapper';

// Stateless component
const TableRow = (props) => {
    return (
        <tr>
            <td>{props.category}</td>
            <td>{props.description}</td>
            <td>{props.priority}</td>
            <td>{props.status}</td>
            <td><button onClick={() => {props.onClosing(props.UniqueId);}}> Change Status </button></td>
        </tr>
    )
}

//Stateful component
// class TableRow extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             defectStatus: this.props.status
//         }
//         this.changeDefectStatus = this.changeDefectStatus.bind(this);
//     }

//     changeDefectStatus(){
//         console.log("from changeStatus method");
//         this.setState({
//             defectStatus: "Closed"
//         });
//     }

//     render() {
//         return (
//             /*
//             * using props to render data
//             * props allows to pass the data from parent 
//                 component to child object.
//             * props dataType : Object
//             * props are immutable, it can't be changed
//             * props not good for dynamic data
//             */
//             <tr>
//                 <td>{this.props.category}</td>
//                 <td>{this.props.description}</td>
//                 <td>{this.props.priority}</td>
//                 <td>{this.state.defectStatus}</td>
//                 <td><button onClick={this.changeDefectStatus}> Change Status </button></td>
//             </tr>

//             /*
//             // alternate approach to using React.Fragment
//             <Wrapper>
//                 <tr>
//                     <td>Backend</td>
//                     <td>Get request not working</td>
//                     <td>1</td>
//                     <td>Open</td>
//                     <td><button>Change Status</button></td>
//                 </tr>
//                 <tr>
//                     <td>Responsive</td>
//                     <td>Not getting responsive for tablets</td>
//                     <td>3</td>
//                     <td>Open</td>
//                     <td><button>Change Status</button></td>
//                 </tr>
//             </Wrapper>
//             */
//            /*
//            // No need to hardcode data in <tr> here, render using array in main.js
//             <React.Fragment>
//                 <tr>
//                     <td>Backend</td>
//                     <td>Get request not working</td>
//                     <td>1</td>
//                     <td>Open</td>
//                     <td><button>Change Status</button></td>
//                 </tr>
//                 <tr>
//                     <td>Responsive</td>
//                     <td>Not getting responsive for tablets</td>
//                     <td>3</td>
//                     <td>Open</td>
//                     <td><button>Change Status</button></td>
//                 </tr>
//             </React.Fragment>
//             */
//         )
//     }
// }

export default TableRow;