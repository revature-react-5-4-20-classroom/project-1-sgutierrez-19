import React from 'react';
import { User } from '../../../model/user';
import { Row, Col } from 'reactstrap';

import './style.css';
import { ReimbursementContainerC } from '../../ReimbursementContainer';
import { getReimById } from '../../../api/employee';
import { Switch, Route } from 'react-router-dom';
import { Reimbursement } from '../../../model/reimbursement';
import { SubmitReimPageC } from '../SubmitReim';

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
        <Row className='h-100'>
          <Col sm={{ size: 8, offset: 2 }}>
            <Switch>
              <Route
                path='/home/employee/reimbursements/pending/'
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
                path='/home/employee/reimbursements/history'
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
                path='/home/employee/reimbursements/submit'
                render={(props: any) => {
                  return (
                    <SubmitReimPageC
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
