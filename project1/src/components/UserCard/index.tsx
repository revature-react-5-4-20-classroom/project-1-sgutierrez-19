import React from 'react';
import { Card, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { User } from '../../model/user';

import './style.css';

interface IUserCardCProps {
  user: User;
}

export class UserCardC extends React.Component<IUserCardCProps, any> {
  constructor(props: IUserCardCProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card className='user-card'>
          <CardBody>
            <Row>
              <Col md='12'>
                <CardTitle>
                  <span className='card-desc'>User ID#</span>
                  {this.props.user.id}
                </CardTitle>
              </Col>
            </Row>

            <Row>
              <Col md='12'>
                <CardText>
                  <span className='card-desc'>Employee:</span>{' '}
                  {this.props.user.first_name} {this.props.user.last_name}
                </CardText>
              </Col>
            </Row>
            <Row>
              <Col md='12'>
                <CardText>
                  <span className='card-desc'>Username:</span>{' '}
                  {this.props.user.username}
                </CardText>
              </Col>
            </Row>

            <Row>
              <Col md='6'>
                <CardText>
                  <span className='card-desc'>Email:</span>{' '}
                  {this.props.user.email}
                </CardText>
              </Col>
              <Col md='6'>
                <CardText>
                  <span className='card-desc'>Role:</span>{' '}
                  {this.props.user.role}
                </CardText>
              </Col>
            </Row>
            <Row></Row>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}
