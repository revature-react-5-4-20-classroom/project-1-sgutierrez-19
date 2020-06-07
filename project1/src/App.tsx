import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavbarComp } from './components/Navbar';
import { User } from './model/user';
import { LandingC } from './components/pages/Landing';
import { Container } from 'reactstrap';
import { EmpReimbursementsPageC } from './components/pages/EmpReimbursementsPage';
import { HomeC } from './components/pages/Home';
import { EmpUserPageC } from './components/pages/EmpUserPage';
import { logout } from './api/auth';
import { ManReimbursementsPageC } from './components/pages/ManReimbursementPage';

// interface IAppState {
//   currUser: User | null;
// }

export class App extends React.Component<any, any> {
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

  logoutUser = async () => {
    await logout();
    this.setState({
      currUser: null,
    });
  };

  render() {
    return (
      <div className='App' id='app-image'>
        <Router>
          <NavbarComp
            logoutUser={this.logoutUser}
            currUser={this.state.currUser}
          />
          <Container id='main-container' className='container-fluid'>
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
                path='/logout'
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
                path='/home'
                render={(props: any) => {
                  return <HomeC {...props} currUser={this.state.currUser} />;
                }}
              ></Route>
              <Route
                path='/employee/reimbursements'
                render={(props: any) => {
                  return (
                    <EmpReimbursementsPageC
                      currUser={this.state.currUser}
                      {...props}
                    />
                  );
                }}
              ></Route>
              <Route
                path='/employee/profile'
                render={(props: any) => {
                  return (
                    <EmpUserPageC
                      updateUser={this.updateUser}
                      currUser={this.state.currUser}
                      {...props}
                    />
                  );
                }}
              ></Route>
              <Route
                path='/manager/reimbursements'
                render={(props: any) => {
                  return (
                    <ManReimbursementsPageC
                      currUser={this.state.currUser}
                      {...props}
                    />
                  );
                }}
              ></Route>
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}
