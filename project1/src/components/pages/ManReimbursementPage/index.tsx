import React from 'react';
import { User } from '../../../model/user';
import { Row, Col } from 'reactstrap';

import './style.css';
import { ReimbursementContainerC } from '../../ReimbursementContainer';
import { getReimById } from '../../../api/employee';
import { Switch, Route } from 'react-router-dom';
import { Reimbursement } from '../../../model/reimbursement';
import { SubmitReimPageC } from '../../SubmitReim';
import { getReimByStatus } from '../../../api/manager';
import { ManPenReimContainer } from '../../ManPendingReimContainer';

interface IManReimbursementsPageProps {
  // currUser: User | null;
  // updateUser: (user: User) => void;
  history: any;
  match: any;
}

interface IManReimbursementsPageState {
  pendingReims: Reimbursement[] | null;
  appReims: Reimbursement[] | null;
  denReims: Reimbursement[] | null;
}

export class ManReimbursementsPageC extends React.Component<
  IManReimbursementsPageProps,
  IManReimbursementsPageState
> {
  constructor(props: IManReimbursementsPageProps) {
    super(props);
    this.state = {
      pendingReims: null,
      appReims: null,
      denReims: null,
    };
  }

  async componentDidMount() {
    await this.getPendingReims();
    await this.getPastReims();
  }

  componentDidUpdate() {
    console.log(
      'From ManReimPageState - pendingReims: ',
      this.state.pendingReims
    );
    console.log('From ManReimPageState - appReims: ', this.state.appReims);
    console.log('From ManReimPageState - denReims: ', this.state.denReims);
  }

  getPendingReims = async () => {
    try {
      // const userId: any = this.props.currUser?.id;
      const pendingReimArr: any = await getReimByStatus(1);
      this.setState({
        pendingReims: pendingReimArr,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getPastReims = async () => {
    try {
      // const userId: any = this.props.currUser?.id;
      const appReimArr: any = await getReimByStatus(2);
      this.setState({
        appReims: appReimArr,
      });
      const denReimArr: any = await getReimByStatus(3);
      this.setState({
        denReims: denReimArr,
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
                path='/manager/reimbursements/review'
                render={(props: any) => {
                  return (
                    <ManPenReimContainer
                      getPendingReims={this.getPendingReims}
                      reimbursements={this.state.pendingReims}
                      {...props}
                    />
                  );
                }}
              ></Route>
              <Route
                path='/manager/reimbursements/history'
                render={(props: any) => {
                  return (
                    <>
                      <Row>
                        <Col xs={6}>
                          <h1>Approved</h1>
                          <ReimbursementContainerC
                            reimbursements={this.state.appReims}
                            {...props}
                          />
                        </Col>
                        <Col xs={6}>
                          <h1>Denied</h1>
                          <ReimbursementContainerC
                            reimbursements={this.state.denReims}
                            {...props}
                          />
                        </Col>
                      </Row>
                    </>
                  );
                }}
              ></Route>
              {/* <Route
                path='/manager/reimbursements/search'
                render={(props: any) => {
                  return (
                    <SubmitReimPageC
                      currUser={this.props.currUser}
                      {...props}
                    />
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
