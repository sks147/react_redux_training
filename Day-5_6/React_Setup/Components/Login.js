import React from 'react';
import { Container, Row, Col, FormGroup, Form, Input, Button } from 'reactstrap';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.roles = {
            tester:{email: "admin@admin.com", password: "admin"},
            developer:{email:"user@user.com", password:"user"}
        }
        this.state={
            email: '',
            password: ''
        },
        this.doLogin = this.doLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, value){
        this.setState({
            [name]: value
        })
    }
    
    doLogin(){
        console.log("email :", this.state.email );
        console.log("password :", this.state.password);
        if(this.state.email === this.roles.tester.email 
            && this.state.password === this.roles.tester.password){
            this.props.history.push('/add-defects');
        }else if(this.state.email === this.roles.developer.email
            && this.state.password === this.roles.developer.password){
            this.props.history.push('/view-defects');           
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <Form>
                                <FormGroup>
                                    <Input ref="email" type="email" placeholder="Email..."
                                    onChange={(e)=>this.handleChange('email', e.target.value)} 
                                    value={this.state.email} ></Input>
                                    <Input ref="password" type="password" placeholder="Password..."
                                    onChange={(e)=>this.handleChange('password', e.target.value)}
                                    value={this.state.password}></Input>
                                </FormGroup>
                                <Button ref="submit" type="button" onClick={this.doLogin}>Login</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>

        );
    }
}

export default Login;