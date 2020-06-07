import React from 'react';
import { Reimbursement } from '../../model/reimbursement';
import { ReimbursementCardC } from '../ReimbursementCard';

import './style.css';
import { User } from '../../model/user';
import { Row, Col } from 'reactstrap';

interface IReimbursementContainerCProps {
  reimbursements: Reimbursement[] | null;
  currUser: User;
  history: any;
  match: any;
}

export class ReimbursementContainerC extends React.Component<
  IReimbursementContainerCProps,
  any
> {
  constructor(props: IReimbursementContainerCProps) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={6} className='offset-3'>
          <div className='reim-div'>
            {this.props.reimbursements &&
              this.props.reimbursements.map((r) => {
                return (
                  <>
                    <ReimbursementCardC key={r.id} reimbursement={r} />
                  </>
                );
              })}
          </div>
        </Col>
      </Row>
    );
  }
}
