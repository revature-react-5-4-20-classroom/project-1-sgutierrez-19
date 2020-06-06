import React from 'react';
import { Reimbursement } from '../../model/reimbursement';
import { ReimbursementCardC } from '../ReimbursementCard';

import './style.css';

interface IReimbursementContainerCProps {
  reimbursements: Reimbursement[] | null;
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
      <>
        {this.props.reimbursements &&
          this.props.reimbursements.map((r) => {
            return <ReimbursementCardC key={r.id} reimbursement={r} />;
          })}
      </>
    );
  }
}
