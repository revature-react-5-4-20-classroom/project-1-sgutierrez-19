import React from 'react';
import { Reimbursement } from '../../model/reimbursement';
import { User } from '../../model/user';
import { getReimById } from '../../api/employee';

import './style.css';
import { ReimbursementCardC } from '../ReimbursementCard';

interface IReimbursementContainerCProps {
  currUser: User | null;
}
interface IReimbursementContainerCState {
  reimbursements: Reimbursement[] | null;
}

export class ReimbursementContainerC extends React.Component<
  IReimbursementContainerCProps,
  IReimbursementContainerCState
> {
  constructor(props: IReimbursementContainerCProps) {
    super(props);
    this.state = {
      reimbursements: null,
    };
  }

  getReimbursements = async () => {
    try {
      const userId: any = this.props.currUser?.id;
      console.log(`USERID: ${userId}`);
      const reimArray: any = await getReimById(userId);
      console.log('from container call: ', reimArray);
      this.setState({ reimbursements: reimArray });
    } catch (error) {
      console.log(error);
    }
  };

  seeReimState = () => {
    const fullState = this.state.reimbursements;
    const firstReim = fullState && fullState[0].author;
    const secondState = fullState && fullState[1];
    console.log('FULL: ', fullState);
    console.log('First author: ', firstReim);
    console.log('second: ', secondState);
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.getReimbursements}>See Reimbursements</button>
          {this.state.reimbursements &&
            this.state.reimbursements.map((r) => {
              return <ReimbursementCardC key={r.id} reimbursement={r} />;
            })}
        </div>
      </>
    );
  }
}
