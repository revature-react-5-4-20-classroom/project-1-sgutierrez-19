import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavbarComp } from './components/Navbar';
import { User } from './model/user';
import { LoginC } from './components/pages/Auth/login';

interface IAppState {
  currUser: User | null;
}

export class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currUser: null,
    };
  }

  updateUser = (user: User) => {
    this.setState({
      currUser: user,
    });
  };

  render() {
    return (
      <div className='App'>
        <NavbarComp />
        <LoginC updateUser={this.updateUser} />
        <Router>
          <Switch>{/* paths/components */}</Switch>
        </Router>
      </div>
    );
  }
}
