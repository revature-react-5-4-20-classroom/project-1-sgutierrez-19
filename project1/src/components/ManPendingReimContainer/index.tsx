import React from 'react';
import { Reimbursement } from '../../model/reimbursement';
import { ReimbursementCardC } from '../ReimbursementCard';

import './style.css';
import { User } from '../../model/user';
import { Row, Col, Button } from 'reactstrap';
import { updateReim } from '../../api/manager';

interface IManPenReimContainerProps {
  reimbursements: Reimbursement[] | null;
  currUser: User;
  getPastReims: () => void;
  getPendingReims: () => void;
  history: any;
  match: any;
}

export class ManPenReimContainer extends React.Component<
  IManPenReimContainerProps,
  any
> {
  // commenting out due to chrome console warning: Useless constructor  @typescript-eslint/no-useless-constructor
  // constructor(props: IManPenReimContainerProps) {
  //   super(props);
  // }

  approveReim = async (e: any) => {
    e.preventDefault();
    await updateReim(e.currentTarget.value, 2);
    await this.props.getPendingReims();
    await this.props.getPastReims();
  };

  denyReim = async (e: any) => {
    e.preventDefault();
    await updateReim(e.currentTarget.value, 3);
    await this.props.getPendingReims();
    await this.props.getPastReims();
  };

  render() {
    return (
      <Row>
        <Col xs={6} className='offset-3'>
          <h3 className='reim-notification'>Reimbursements Needing Review:</h3>
          <div className='pending-div'>
            {this.props.reimbursements &&
              this.props.reimbursements.map((r) => {
                return (
                  <>
                    <ReimbursementCardC
                      key={r.id}
                      reimbursement={r}
                      {...this.props}
                    />
                    <Row>
                      <Col xs={6}>
                        <Button
                          color='success'
                          onClick={this.approveReim}
                          value={r.id}
                        >
                          Approve
                        </Button>
                      </Col>
                      <Col xs={6}>
                        <Button
                          color='danger'
                          onClick={this.denyReim}
                          value={r.id}
                        >
                          Deny
                        </Button>
                      </Col>
                    </Row>
                  </>
                );
              })}
          </div>
        </Col>
      </Row>
    );
  }
}
