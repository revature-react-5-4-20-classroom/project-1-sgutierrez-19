import React from 'react';
import { User } from '../../../model/user';
import { LoginC } from '../../Auth/login';
import { Row, Col } from 'reactstrap';

import './style.css';

interface ILandingCProps {
  updateUser: (user: User) => void;
}

export class LandingC extends React.Component<ILandingCProps> {
  constructor(props: ILandingCProps) {
    super(props);
  }
  render() {
    return (
      <>
        <Row className='h-100'>
          <Col className='landing-panels' xs='8' id='left-panel'></Col>
          <Col className='landing-panels' xs='4'>
            <Row>
              <Col xs='12'>
                <LoginC updateUser={this.props.updateUser} />
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}
