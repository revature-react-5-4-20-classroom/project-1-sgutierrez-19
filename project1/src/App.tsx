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
                    <EmpUserPageC currUser={this.state.currUser} {...props} />
                  );
                }}
              ></Route>

              {/* <Route
                path='/manager/employees'
                render={(props: any) => {
                  return <UserContainerC {...props} />;
                }}
              ></Route>
              <Route
                path='/d/reimbursements/submit'
                render={(props: any) => {
                  return (
                    <SubmitReimPageC
                      currUser={this.state.currUser}
                      {...props}
                    />
                  );
                }}
              ></Route> */}
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}
