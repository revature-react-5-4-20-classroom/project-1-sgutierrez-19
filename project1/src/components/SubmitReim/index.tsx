import React from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { createReim } from '../../api/employee';
import { User } from '../../model/user';
import { ReimbursementCardC } from '../ReimbursementCard';

import './style.css';
import { Reimbursement } from '../../model/reimbursement';

interface ISubmitReimPageCProps {
  currUser: User;
}

interface ISubmitReimPageCState {
  amount: number | undefined;
  type: string;
  description: string;
  reimbursement: Reimbursement | null;
}

export class SubmitReimPageC extends React.Component<
  ISubmitReimPageCProps,
  ISubmitReimPageCState
> {
  constructor(props: ISubmitReimPageCProps) {
    super(props);
    this.state = {
      amount: undefined,
      type: 'Lodging',
      description: '',
      reimbursement: null,
    };
  }

  setAmount = (e: any) => {
    e.preventDefault();
    this.setState({ amount: e.currentTarget.value });
  };

  setType = (e: any) => {
    e.preventDefault();
    this.setState({ type: e.currentTarget.value });
  };

  setDescription = (e: any) => {
    e.preventDefault();
    this.setState({ description: e.currentTarget.value });
  };

  submitReim = async (e: any) => {
    e.preventDefault();
    let rAmount = +this.state.amount!;
    let rType = this.state.type;
    let rDescription = this.state.description;
    console.log(rAmount, rType, rDescription);
    if (isNaN(rAmount) || rAmount < 0.01) {
      return alert('Amount must be a number.  Example: 19.99');
    }
    try {
      let makeReim = await createReim(rAmount, rDescription, rType);
      console.log('makereim: ', makeReim);
      let r = makeReim.data;
      let newReim = new Reimbursement(
        r.author,
        r.amount,
        r.date_submitted,
        r.description,
        r.status,
        r.type,
        r.id
      );
      this.setState({ reimbursement: newReim });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <Form onSubmit={this.submitReim}>
              <FormGroup>
                <Label for='amount'>Amount</Label>
                <Input
                  type='text'
                  name='amount'
                  id='reim-amount'
                  placeholder='0.00'
                  value={this.state.amount}
                  onChange={this.setAmount}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for='type'>Reimbursement Type</Label>
                <Input
                  type='select'
                  name='type'
                  id='reim-type'
                  onChange={this.setType}
                  required
                >
                  <option>Lodging</option>
                  <option>Travel</option>
                  <option>Food</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for='description'>Description:</Label>
                <Input
                  type='textarea'
                  name='description'
                  id='reim-description'
                  value={this.state.description}
                  onChange={this.setDescription}
                  required
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {this.state.reimbursement ? (
              <>
                <hr />
                <h3> Your new reimbursement request has been submitted!</h3>

                <ReimbursementCardC reimbursement={this.state.reimbursement} />
              </>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </>
    );
  }
}
