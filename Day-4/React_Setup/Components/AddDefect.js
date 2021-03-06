import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddDefect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'Functionality',
            description: '',
            priority: 6,
            status: "Open"
        };
        this.addNewDefect = this.addNewDefect.bind(this);
    }

    addNewDefect() {
        console.log('adding new defect');
        let newDefect = {
            category: this.refs.refCategory.value,
            description: this.refs.refDesc.value,
            priority: this.refs.refPriority.value,
            status: "Open"
        };
        // getting data from localStorage
        let currentData = JSON.parse(localStorage.getItem('defects'));
        currentData.push(newDefect);
        localStorage.setItem('defects', JSON.stringify(currentData));
        // this.props.history.push('/view-defects');
        this.props.history.push(`/view-defects/${currentData.length}`);
        // changed for calculating the count of defects
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col className="text-center" md={{ size: 6, offset: 3 }}>
                            <h1 >Add Defect</h1>
                            <Form>
                                <FormGroup>
                                    {/* Warning : You provided a `value` prop to a form field without an `onChange` handler. */}
                                    <Label for="select_category">Select Category</Label>
                                    {/* instead of using id, we use ref, it corresponds to Virtual DOM */}
                                    {/* this.state.xyz will make the form a controlled form, i.e react is controlling the state of the form*/}
                                    <Input value={this.state.category} type="select" id="select_category" ref="refCategory"
                                        onChange={() => {
                                            this.setState({
                                                category: this.refs.refCategory.value
                                            })
                                        }}>
                                        <option value="UI">UI</option>
                                        <option value="Functionality">Functionality</option>
                                        <option value="Change Request">Change Request</option>
                                    </Input>
                                    Description:<Input type="textarea" value={this.state.description} ref="refDesc"
                                        onChange={() => {
                                            this.setState({
                                                description: this.refs.refDesc.value
                                            })
                                        }}></Input>
                                    Priority:<Input value={this.state.priority} ref="refPriority" type='number'
                                        onChange={() => {
                                            this.setState({
                                                priority: this.refs.refPriority.value
                                            })
                                        }}></Input>
                                    <Button type="button" onClick={this.addNewDefect}>Add Defect</Button>
                                </FormGroup>
                            </Form>

                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        );
    }
}

export default AddDefect;