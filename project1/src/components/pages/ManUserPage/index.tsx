import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { User } from '../../../model/user';
import { Row, Col } from 'reactstrap';

import './style.css';
import { UserContainerC } from '../../UserContainer';
import { UpdateProfileC } from '../../UpdateProfile';

interface IManUserPageCProps {
  currUser: User;
  updateUser: (user: User) => void;
  history: any;
  match: any;
}

interface IManUserPageCState {
  users: User[] | null;
}

export class ManUserPageC extends React.Component<
  IManUserPageCProps,
  IManUserPageCState
> {
  constructor(props: IManUserPageCProps) {
    super(props);
    this.state = {
      users: null,
    };
  }

  render() {
    return (
      <>
        <Row className='h-100'>
          <Col sm={{ size: 8, offset: 2 }}>
            <Switch>
              <Route
                path='/manager/profile/view'
                render={(props: any) => {
                  return (
                    <UserContainerC currUser={this.props.currUser} {...props} />
                  );
                }}
              ></Route>
              <Route
                path='/manager/profile/update'
                render={(props: any) => {
                  return (
                    <UpdateProfileC
                      updateUser={this.props.updateUser}
                      currUser={this.props.currUser}
                      {...props}
                    />
                  );
                }}
              ></Route>
            </Switch>
          </Col>
        </Row>
      </>
    );
  }
}
