import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavbarComp } from './components/Navbar';
import { User } from './model/user';
import { LandingC } from './components/pages/Landing';
import { Container } from 'reactstrap';
import { ViewReimbursementsPageC } from './components/pages/ViewReimbursements';

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
    console.log(`user: ${JSON.stringify(user)}`);
    this.setState({
      currUser: user,
    });
  };

  render() {
    return (
      <div className='App' id='app-image'>
        <NavbarComp currentUser={this.state.currUser} />
        <Container id='main-container' className='container-fluid'>
          <Router>
            <Switch>
              <Route
                path='/landing'
                render={(props: any) => {
                  return (
                    <LandingC
                      currUser={this.state.currUser}
                      updateUser={this.updateUser}
                      {...props}
                    />
                  );
                }}
              ></Route>
              <Route
                path='/employee/reimbursements/view'
                render={(props: any) => {
                  return (
                    <ViewReimbursementsPageC
                      currUser={this.state.currUser}
                      {...props}
                    />
                  );
                }}
              ></Route>
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}