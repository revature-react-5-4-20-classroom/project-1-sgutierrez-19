import React from 'react';
import { User } from '../../../model/user';
import { LoginC } from '../../Auth/login';
import { Row, Col, Jumbotron, Container } from 'reactstrap';

import './style.css';

interface ILandingCProps {
  updateUser: (user: User) => void;
  history: any;
  match: any;
}

export class LandingC extends React.Component<ILandingCProps> {
  // commenting out due to chrome console warning: Useless constructor  @typescript-eslint/no-useless-constructor
  // constructor(props: ILandingCProps) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <Row className='h-100'>
          <Col md='8'>
            <Jumbotron className='jumbo-div' fluid>
              <Container fluid>
                <h1 className='display-3'>R.M.S.</h1>
                <p className='lead'>
                  Your own system for managing your company's reimbursement
                  requests.
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col id='login-panel' md='4'>
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
