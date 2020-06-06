import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EmpReimbursementsPageC } from '../EmpReimbursementsPage';
import { User } from '../../../model/user';
import { HomeC } from '../Home';

interface IHomeRCProps {
  currUser: User | null;
  history: any;
  match: any;
}

export class HomeRC extends React.Component<IHomeRCProps, any> {
  constructor(props: IHomeRCProps) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currUser && this.props.currUser.role === 'Employee') {
      this.props.history.push('/home/employee');
    } else if (
      this.props.currUser &&
      this.props.currUser.role === 'Finance Manager'
    ) {
      this.props.history.push('/home/manager');
    }
  }

  render() {
    return (
      <Switch>
        <Route
          path='/home/employee'
          render={(props: any) => {
            return <HomeC {...props} currUser={this.props.currUser} />;
          }}
        ></Route>
      </Switch>
    );
  }
}
