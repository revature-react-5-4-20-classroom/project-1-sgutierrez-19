import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { User } from '../../../model/user';

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
      </>
    );
  }
}
