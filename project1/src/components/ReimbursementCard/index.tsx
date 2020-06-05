import React from 'react';
import { Card, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { Reimbursement } from '../../model/reimbursement';

import './style.css';

interface IReimbursementCardCProps {
  reimbursement: Reimbursement;
}

export class ReimbursementCardC extends React.Component<
  IReimbursementCardCProps,
  any
> {
  constructor(props: IReimbursementCardCProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Row>
              <Col md='12'>
                <CardTitle>
                  <span className='card-desc'>Reimbursement ID#</span>
                  {this.props.reimbursement.id} -{' '}
                  <span className='card-desc'>Status:</span>{' '}
                  {this.props.reimbursement.status}
                </CardTitle>
              </Col>
            </Row>

            <Row>
              <Col md='6'>
                <CardText>
                  <span className='card-desc'>Amount:</span> $
                  {this.props.reimbursement.amount}
                </CardText>
              </Col>
              <Col md='6'>
                <CardText>
                  <span className='card-desc'>Reimbursement Type:</span>{' '}
                  {this.props.reimbursement.type}
                </CardText>
              </Col>
            </Row>

            <Row>
              <Col md='12'>
                <CardText>
                  <span className='card-desc'>Description:</span>{' '}
                  {this.props.reimbursement.description}
                </CardText>
              </Col>
            </Row>
            <Row>
              <Col md='6'>
                <CardText>
                  <span className='card-desc'>Resolved By:</span>{' '}
                  {this.props.reimbursement.resolver
                    ? this.props.reimbursement.resolver
                    : '--'}
                </CardText>
              </Col>
              <Col md='6'>
                <CardText>
                  <span className='card-desc'>Resolved On:</span>{' '}
                  {this.props.reimbursement.date_resolved
                    ? this.props.reimbursement.date_resolved
                    : '--'}
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
