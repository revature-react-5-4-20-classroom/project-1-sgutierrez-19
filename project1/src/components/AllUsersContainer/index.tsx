import React from 'react';
import { UserCardC } from '../UserCard';

import './style.css';
import { User } from '../../model/user';

interface IAllUsersContainerCProps {
  allUsers: User[] | null;
}

export class AllUsersContainerC extends React.Component<
  IAllUsersContainerCProps,
  any
> {
  // commenting out due to chrome console warning: Useless constructor  @typescript-eslint/no-useless-constructor
  // constructor(props: IAllUsersContainerCProps) {
  //   super(props);
  // }

  render() {
    return (
      <>
        {this.props.allUsers &&
          this.props.allUsers.map((u) => {
            return <UserCardC key={u.id} currUser={u} />;
          })}
      </>
    );
  }
}
