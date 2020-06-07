import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Row,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import { createReim } from '../../api/employee';
import { User } from '../../model/user';
import { ReimbursementCardC } from '../ReimbursementCard';

import './style.css';
import { Reimbursement } from '../../model/reimbursement';

interface ISubmitReimPageCProps {
  currUser: User;
  getReimbursements: () => void;
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
    if (isNaN(rAmount) || rAmount < 0.01) {
      return alert('Amount must be a number.  Example: 19.99');
    }
    try {
      let makeReim = await createReim(rAmount, rDescription, rType);
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
      await this.props.getReimbursements();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <Row>
          <Col xs={6} className='offset-3'>
            <Form className='input-form' onSubmit={this.submitReim}>
              <Label className='input-form-label'>
                Submit a New Reimbursement
              </Label>
              <FormGroup>
                <Label for='amount'>Amount</Label>

                <InputGroup>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>$</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type='text'
                    name='amount'
                    id='reim-amount'
                    placeholder='0.00'
                    value={this.state.amount}
                    onChange={this.setAmount}
                    required
                  />
                </InputGroup>
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
          <Col xs={6} className='offset-3'>
            {this.state.reimbursement ? (
              <>
                <h3 className='reim-notification'>
                  --- Reimbursement Request Created ---
                </h3>
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
