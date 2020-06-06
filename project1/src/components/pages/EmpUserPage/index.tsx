import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { User } from '../../../model/user';
import { Row, Col } from 'reactstrap';

import './style.css';
import { UserContainerC } from '../../UserContainer';

interface IEmpUserPageCProps {
  currUser: User;
  updateUser: (user: User) => void;
  history: any;
  match: any;
}

interface IEmpUserPageCState {
  users: User[] | null;
}

export class EmpUserPageC extends React.Component<
  IEmpUserPageCProps,
  IEmpUserPageCState
> {
  constructor(props: IEmpUserPageCProps) {
    super(props);
    this.state = {
      users: null,
    };
  }

  //  CODE TO GET ALL USERS
  // async componentDidMount() {
  //   await this.getUsers();
  // }

  // getUsers = async () => {
  //   try {
  //     const userArray: any = await getAllUsers();
  //     console.log('from container call: ', userArray);
  //     this.setState({ users: userArray });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // <div>
  // <button onClick={this.getUsers}>See Users</button>
  // </div>{this.state.users &&
  //  this.state.users.map((u) => {
  //    return <UserCardC key={u.id} user={u} />;
  //  })}
  //</div>

  render() {
    return (
      <>
        <Row className='h-100'>
          <Col sm={{ size: 8, offset: 2 }}>
            <Switch>
              <Route
                path='/employee/profile/view'
                render={(props: any) => {
                  return <UserContainerC currUser={this.props.currUser} />;
                }}
              ></Route>
              {/* <Route
                path='/employee/profile/update'
                render={(props: any) => {
                  return (
                    
                  );
                }}
              ></Route> */}
            </Switch>
          </Col>
        </Row>
      </>
    );
  }
}
