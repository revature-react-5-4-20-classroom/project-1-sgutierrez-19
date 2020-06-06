import React from 'react';
import { User } from '../../model/user';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { login } from '../../api/auth';

interface ILoginCProps {
  updateUser: (user: User) => void;
  history: any;
  match: any;
}

interface ILoginCState {
  username: string;
  password: string;
  isError: boolean;
  errorMessage: string;
}

export class LoginC extends React.Component<ILoginCProps, ILoginCState> {
  constructor(props: ILoginCProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isError: false,
      errorMessage: '',
    };
  }

  setUsername = (event: any) => {
    this.setState({
      username: event.currentTarget.value,
    });
  };

  setPassword = (event: any) => {
    this.setState({
      password: event.currentTarget.value,
    });
  };

  tryLogin = async (event: any) => {
    event.preventDefault();
    try {
      const loggedUser: User = await login(
        this.state.username,
        this.state.password
      );
      this.props.updateUser(loggedUser);
      this.setState({
        username: '',
        password: '',
      });
      if (loggedUser.role === 'Employee') {
        this.props.history.push('/home');
      } else if (loggedUser.role === 'Finance Manager') {
        this.props.history.push('/home');
      } else {
        this.props.history.push('/landing');
      }
    } catch (error) {
      this.setState({
        password: '',
        isError: true,
        errorMessage: error.message,
      });
    }
  };

  render() {
    return (
      <Form onSubmit={this.tryLogin}>
        <FormGroup>
          <Label for='username'>Username</Label>
          <Input
            type='text'
            name='username'
            id='username'
            placeholder='Username'
            onChange={this.setUsername}
            value={this.state.username}
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            required
            onChange={this.setPassword}
            value={this.state.password}
          />
        </FormGroup>
        <Button color='info'>Login</Button>
      </Form>
    );
  }
}
