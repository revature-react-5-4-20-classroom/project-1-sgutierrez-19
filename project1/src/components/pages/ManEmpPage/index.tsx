import React from 'react';
import { User } from '../../../model/user';
import { getAllUsers } from '../../../api/manager';
import './style.css';
import { AllUsersContainerC } from '../../AllUsersContainer';

interface IManEmployeePageState {
  allUsers: User[] | null;
}

export class ManEmployeePageC extends React.Component<
  any,
  IManEmployeePageState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      allUsers: null,
    };
  }

  async componentDidMount() {
    await this.getAllEmployees();
  }

  getAllEmployees = async () => {
    let results = await getAllUsers();
    this.setState({
      allUsers: results,
    });
  };

  render() {
    return <AllUsersContainerC allUsers={this.state.allUsers} />;
  }
}
