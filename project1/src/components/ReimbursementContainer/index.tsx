import React from 'react';
import { Reimbursement } from '../../model/reimbursement';
import { ReimbursementCardC } from '../ReimbursementCard';

import './style.css';
import { User } from '../../model/user';
import { Row, Col, Button } from 'reactstrap';

interface IReimbursementContainerCProps {
  reimbursements: Reimbursement[] | null;
  currUser: User;
}

export class ReimbursementContainerC extends React.Component<
  IReimbursementContainerCProps,
  any
> {
  // commenting out due to chrome console warning: Useless constructor  @typescript-eslint/no-useless-constructor
  // constructor(props: IReimbursementContainerCProps) {
  //   super(props);
  // }

  render() {
    return (
      <>
        {this.props.reimbursements &&
          this.props.reimbursements.map((r) => {
            return (
              <>
                <ReimbursementCardC key={r.id} reimbursement={r} />
              </>
            );
          })}
      </>
    );
  }
}
