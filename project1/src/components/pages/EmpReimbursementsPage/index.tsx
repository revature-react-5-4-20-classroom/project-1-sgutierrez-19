import React from 'react';
import { User } from '../../../model/user';

import './style.css';
import { ReimbursementContainerC } from '../../ReimbursementContainer';
import { getReimById } from '../../../api/employee';
import { Switch, Route } from 'react-router-dom';
import { Reimbursement } from '../../../model/reimbursement';
import { SubmitReimPageC } from '../../SubmitReim';

interface IEmpReimbursementsPageProps {
  currUser: User | null;
  updateUser: (user: User) => void;
  history: any;
  match: any;
}

interface IEmpReimbursementsPageState {
  pendingReim: Reimbursement[] | null;
  pastReim: Reimbursement[] | null;
}

export class EmpReimbursementsPageC extends React.Component<
  IEmpReimbursementsPageProps,
  IEmpReimbursementsPageState
> {
  constructor(props: IEmpReimbursementsPageProps) {
    super(props);
    this.state = {
      pendingReim: null,
      pastReim: null,
    };
  }

  async componentDidMount() {
    await this.getReimbursements();
  }

  getReimbursements = async () => {
    try {
      console.log('getting reims');
      const userId: any = this.props.currUser?.id;
      const reimArray: any = await getReimById(userId);
      const pending = reimArray.filter((r: any) => {
        return r.status === 'Pending';
      });
      const past = reimArray.filter((r: any) => {
        return r.status === 'Approved' || r.status === 'Denied';
      });

      this.setState({
        pendingReim: pending,
        pastReim: past,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            path='/employee/reimbursements/pending'
            render={(props: any) => {
              return (
                <ReimbursementContainerC
                  reimbursements={this.state.pendingReim}
                  {...props}
                />
              );
            }}
          ></Route>
          <Route
            path='/employee/reimbursements/history'
            render={(props: any) => {
              return (
                <ReimbursementContainerC
                  reimbursements={this.state.pastReim}
                  {...props}
                />
              );
            }}
          ></Route>
          <Route
            path='/employee/reimbursements/submit'
            render={(props: any) => {
              return (
                <SubmitReimPageC
                  getReimbursements={this.getReimbursements}
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
