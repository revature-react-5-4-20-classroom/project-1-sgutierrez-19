import React from 'react';
import { User } from '../../../model/user';
// import { ReimbursementContainerC } from '../../ReimbursementContainer';
// import { Row, Col } from 'reactstrap';

import './style.css';

interface IViewReimbursementsPageCProps {
  currUser: User | null;
  updateUser: (user: User) => void;
  // history: any;
  // match: any;
}

export class ViewReimbursementsPageC extends React.Component<
  IViewReimbursementsPageCProps
> {
  constructor(props: IViewReimbursementsPageCProps) {
    super(props);
  }
  render() {
    return (
      // <>
      //   <Row className='h-100'>
      //     <Col sm={{ size: 8, offset: 2 }}>
      //       {<ReimbursementContainerC currUser={this.props.currUser} />}
      //     </Col>
      //   </Row>
      // </>
      <></>
    );
  }
}
