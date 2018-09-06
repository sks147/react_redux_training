import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddDefect extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.addNewDefect = this.addNewDefect.bind(this);
    }

    addNewDefect(){
        console.log('adding new defect');
        let newDefect = {
            category:this.refs.refCategory.value,
            description:this.refs.refDesc.value,
            priority:this.refs.refPriority.value,
            status:"Open"
        };
        // getting data from localStorage
        let currentData = JSON.parse(localStorage.getItem('defects'));
        currentData.push(newDefect);
        localStorage.setItem('defects', JSON.stringify(currentData));
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add Defect</h1>
                <Form>
                    <FormGroup>
                        <Label for="select_category">Select Category</Label>
                        {/* instead of using id, we use ref, it corresponds to Virtual DOM */}
                        <Input type="select" name="selectCategory" id="select_category" ref="refCategory">
                            <option value="UI">UI</option>
                            <option value="Functionality">Functionality</option>
                            <option value="Change Request">Change Request</option>
                        </Input>
                        Description:<textarea ref="refDesc"></textarea> <br/><br/>
                        Priority:<Input ref="refPriority" type='number'></Input>
                        <Button type="button" onClick={this.addNewDefect}>Add Defect</Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        );
    }
}

export default AddDefect;