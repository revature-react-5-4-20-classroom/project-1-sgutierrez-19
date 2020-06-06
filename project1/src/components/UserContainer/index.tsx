import React from 'react';
import { UserCardC } from '../UserCard';

import './style.css';
import { User } from '../../model/user';
import { getAllUsers } from '../../api/manager';

// interface IUserContainerCProps {
//   currUser: User | null;
// }
interface IUserContainerCState {
  users: User[] | null;
}

export class UserContainerC extends React.Component<any, IUserContainerCState> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: null,
    };
  }

  getUsers = async () => {
    try {
      const userArray: any = await getAllUsers();
      console.log('from container call: ', userArray);
      this.setState({ users: userArray });
    } catch (error) {
      console.log(error);
    }
  };

  seeReimState = () => {
    const fullState = this.state.users;
    const firstReim = fullState && fullState[0].first_name;
    const secondState = fullState && fullState[1];
    console.log('FULL: ', fullState);
    console.log('First author: ', firstReim);
    console.log('second: ', secondState);
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.getUsers}>See Users</button>
          {this.state.users &&
            this.state.users.map((u) => {
              return <UserCardC key={u.id} user={u} />;
            })}
        </div>
      </>
    );
  }
}
