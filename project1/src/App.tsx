import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavbarComp } from './components/Navbar';
import { User } from './model/user';
import { LandingC } from './components/pages/Landing';
import { Container } from 'reactstrap';
import { ViewReimbursementsPageC } from './components/pages/ViewReimbursements';
import { UserContainerC } from './components/UserContainer';
import { HomeC } from './components/pages/Home';
import { SubmitReimPageC } from './components/pages/SubmitReim';

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
              <Route
                path='/manager/employees'
                render={(props: any) => {
                  return <UserContainerC {...props} />;
                }}
              ></Route>
              <Route
                path='/employee/reimbursements/submit'
                render={(props: any) => {
                  return (
                    <SubmitReimPageC
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
