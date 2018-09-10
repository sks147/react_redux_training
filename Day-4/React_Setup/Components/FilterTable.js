import React, { Component } from 'react';
import { Container, Row, Col, Label, FormGroup, Form, Input, Button } from 'reactstrap';

class FilterTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'Functionality'
        };

    }
    // filter Defect Table function
    filterDefectTable(defectCategory){
        console.log('filtering defects');
        console.log(this.state);
        let newDefect = {
            category:this.state.category,
            description:this.state.description,
            priority:this.state.priority,
            status:"Open"
        };
        console.log(newDefect);
        this.props.changeParentState(newDefect);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <Form>
                                <FormGroup>
                                    {/* Warning : You provided a `value` prop to a form field without an `onChange` handler. */}
                                    <Label for="select_category">Filter By Category</Label>
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
                                    <Button type="button" onClick={this.filterDefectTable}>Filter Table</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>

        );
    }
}

export default FilterTable;