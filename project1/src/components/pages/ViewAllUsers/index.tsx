import React from 'react';
import { Row, Col } from 'reactstrap';
import { UserContainerC } from '../../UserContainer';

import './style.css';

export class ViewAllUsersPageC extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <Row className='h-100'>
          <Col sm={{ size: 8, offset: 2 }}>
            <UserContainerC />
          </Col>
        </Row>
      </>
    );
  }
}
