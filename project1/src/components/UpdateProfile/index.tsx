import React from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { User } from '../../model/user';
import { UserContainerC } from '../UserContainer';

import './style.css';
import { stringify } from 'querystring';
import { updateUser } from '../../api/admin';

interface IUpdateProfileCProps {
  currUser: User;
  updateUser: (user: User) => void;
}

interface IUpdateProfileCState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export class UpdateProfileC extends React.Component<
  IUpdateProfileCProps,
  IUpdateProfileCState
> {
  constructor(props: IUpdateProfileCProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    };
  }

  setFirst = (e: any) => {
    e.preventDefault();
    this.setState({ firstName: e.currentTarget.value });
  };

  setLast = (e: any) => {
    e.preventDefault();
    this.setState({ lastName: e.currentTarget.value });
  };

  setUsername = (e: any) => {
    e.preventDefault();
    this.setState({ username: e.currentTarget.value });
  };

  setEmail = (e: any) => {
    e.preventDefault();
    this.setState({ email: e.currentTarget.value });
  };

  setPassword = (e: any) => {
    e.preventDefault();
    this.setState({ password: e.currentTarget.value });
  };

  updateProfile = async (e: any) => {
    e.preventDefault();
    let updateObj: any = {};
    updateObj.currUserId = +this.props.currUser.id;
    if (this.state.username) updateObj.username = this.state.username;
    if (this.state.password) updateObj.password = this.state.password;
    if (this.state.firstName) updateObj.first_name = this.state.firstName;
    if (this.state.lastName) updateObj.last_name = this.state.lastName;
    if (this.state.email) updateObj.email = this.state.email;
    if (Object.keys(updateObj).length < 2) {
      return alert('You need to provide some info to update!');
    }
    try {
      let updateUserProfile = await updateUser(updateObj);
      let r = updateUserProfile.data;
      let updateUserObj = new User(
        r.id,
        r.username,
        r.first_name,
        r.last_name,
        r.email,
        r.role
      );
      this.props.updateUser(updateUserObj);
    } catch (error) {
      console.log(error);
    }
  };

  //   submitReim = async (e: any) => {
  //     e.preventDefault();
  //     let rAmount = +this.state.amount!;
  //     let rType = this.state.type;
  //     let rDescription = this.state.description;
  //     console.log(rAmount, rType, rDescription);
  //     if (isNaN(rAmount) || rAmount < 0.01) {
  //       return alert('Amount must be a number.  Example: 19.99');
  //     }
  //     try {
  //       let makeReim = await createReim(rAmount, rDescription, rType);
  //       console.log('makereim: ', makeReim);
  //       let r = makeReim.data;
  //       let newReim = new Reimbursement(
  //         r.author,
  //         r.amount,
  //         r.date_submitted,
  //         r.description,
  //         r.status,
  //         r.type,
  //         r.id
  //       );
  //       this.setState({ reimbursement: newReim });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <Form onSubmit={this.updateProfile}>
              <FormGroup>
                <Label for='firstName'>First Name:</Label>
                <Input
                  type='text'
                  name='firstName'
                  id='first-name'
                  value={this.state.firstName}
                  onChange={this.setFirst}
                />
              </FormGroup>
              <FormGroup>
                <Label for='lastName'>Last Name:</Label>
                <Input
                  type='text'
                  name='lastName'
                  id='last-name'
                  value={this.state.lastName}
                  onChange={this.setLast}
                />
              </FormGroup>
              <FormGroup>
                <Label for='username'>Username:</Label>
                <Input
                  type='text'
                  name='username'
                  id='username'
                  value={this.state.username}
                  onChange={this.setUsername}
                />
              </FormGroup>
              <FormGroup>
                <Label for='email'>E-mail:</Label>
                <Input
                  type='text'
                  name='email'
                  id='email'
                  value={this.state.email}
                  onChange={this.setEmail}
                />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Password:</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  value={this.state.password}
                  onChange={this.setPassword}
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          {/* <Col xs={12}>
            {this.state.reimbursement ? (
              <>
                <hr />
                <h3> Your profile has been updated!</h3>
                <UserContainerC currUser={this.props.currUser} />
              </>
            ) : (
              <></>
            )}
          </Col> */}
        </Row>
      </>
    );
  }
}
