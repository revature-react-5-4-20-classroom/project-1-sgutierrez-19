import React from 'react';
import { Reimbursement } from '../../model/reimbursement';
import { ReimbursementCardC } from '../ReimbursementCard';

import './style.css';
import { User } from '../../model/user';
import { Row, Col, Button } from 'reactstrap';
import { EPERM } from 'constants';
import { updateUser } from '../../api/admin';
import { updateReim } from '../../api/manager';

interface IManPenReimContainerProps {
  reimbursements: Reimbursement[] | null;
  currUser: User;
  getPendingReims: () => void;
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
  };

  denyReim = async (e: any) => {
    e.preventDefault();
    await updateReim(e.currentTarget.value, 3);
    await this.props.getPendingReims();
  };

  render() {
    return (
      <>
        {this.props.reimbursements &&
          this.props.reimbursements.map((r) => {
            return (
              <>
                <Row>
                  <Col xs={10}>
                    <ReimbursementCardC key={r.id} reimbursement={r} />
                  </Col>
                  <Col xs={2}>
                    <Button onClick={this.approveReim} value={r.id}>
                      Approve
                    </Button>
                    <Button onClick={this.denyReim} value={r.id}>
                      Deny
                    </Button>
                  </Col>
                </Row>
              </>
            );
          })}
      </>
    );
  }
}
