import React from 'react';
import { User } from '../../../model/user';
import { LoginC } from '../../Auth/login';
import { Row, Col } from 'reactstrap';

import './style.css';
import { ReimbursementContainerC } from '../../ReimbursementContainer';

interface ILandingCProps {
  currUser: User | null;
  updateUser: (user: User) => void;
  history: any;
  match: any;
}

export class LandingC extends React.Component<ILandingCProps> {
  constructor(props: ILandingCProps) {
    super(props);
  }
  render() {
    return (
      <>
        <Row className='h-100'>
          <Col m='8'>
            <Row>
              <Col>
                <ReimbursementContainerC currUser={this.props.currUser} />
              </Col>
            </Row>
          </Col>
          <Col id='login-panel' m='4'>
            <Row>
              <Col xs='12'>
                <LoginC
                  history={this.props.history}
                  match={this.props.match}
                  updateUser={this.props.updateUser}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}
