import React from 'react';
import { UserCardC } from '../UserCard';

import './style.css';
import { User } from '../../model/user';

interface IUserContainerCProps {
  currUser: User;
}

export class UserContainerC extends React.Component<IUserContainerCProps, any> {
  constructor(props: IUserContainerCProps) {
    super(props);
  }

  render() {
    return (
      <>
        <UserCardC currUser={this.props.currUser} />
      </>
    );
  }
}
