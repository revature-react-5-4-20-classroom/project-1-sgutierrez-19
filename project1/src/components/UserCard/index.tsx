import React from 'react';
import { Card, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { User } from '../../model/user';

import './style.css';

interface IUserCardCProps {
  currUser: User;
}

export class UserCardC extends React.Component<IUserCardCProps, any> {
  // commenting out due to chrome console warning: Useless constructor  @typescript-eslint/no-useless-constructor
  // constructor(props: IUserCardCProps) {
  //   super(props);
  // }
  render() {
    return (
      <Card className='user-card'>
        <CardBody>
          <Row>
            <Col md='12'>
              <CardTitle>
                <span className='card-desc'>User ID#</span>
                {this.props.currUser.id}
              </CardTitle>
            </Col>
          </Row>

          <Row>
            <Col md='12'>
              <CardText>
                <span className='card-desc'>Employee:</span>{' '}
                {this.props.currUser.first_name} {this.props.currUser.last_name}
              </CardText>
            </Col>
          </Row>
          <Row>
            <Col md='12'>
              <CardText>
                <span className='card-desc'>Username:</span>{' '}
                {this.props.currUser.username}
              </CardText>
            </Col>
          </Row>

          <Row>
            <Col md='6'>
              <CardText>
                <span className='card-desc'>Email:</span>{' '}
                {this.props.currUser.email}
              </CardText>
            </Col>
            <Col md='6'>
              <CardText>
                <span className='card-desc'>Role:</span>{' '}
                {this.props.currUser.role}
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
