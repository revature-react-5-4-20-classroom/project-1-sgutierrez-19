import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import { ReimbursementContainerC } from '../ReimbursementContainer';
import { User } from '../../model/user';
import { Reimbursement } from '../../model/reimbursement';
import { getReimById } from '../../api/employee';
import './style.css';

interface ISearchCProps {
  currUser: User;
  history: any;
  match: any;
}

interface ISearchCState {
  searchId: number | undefined;
  reimbursements: Reimbursement[] | null;
}
export class SearchC extends React.Component<ISearchCProps, ISearchCState> {
  constructor(props: ISearchCProps) {
    super(props);
    this.state = {
      searchId: undefined,
      reimbursements: null,
    };
  }

  setId = (e: any) => {
    e.preventDefault();
    this.setState({
      searchId: e.currentTarget.value,
    });
  };

  searchReims = async (e: any) => {
    e.preventDefault();
    let empId = this.state.searchId;
    if (!empId || isNaN(empId)) {
      return alert('You must pass a valid employee ID number.  Example: 12');
    }
    let reimArr = await getReimById(empId);
    this.setState({
      reimbursements: reimArr,
    });
  };

  render() {
    return (
      <>
        <Row>
          <Col xs={{ size: 6, offset: 3 }}>
            <Form inline onSubmit={this.searchReims}>
              <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <InputGroup>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      Search Reimbursements by Employee ID:{' '}
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    type='text'
                    name='searchByID'
                    id='searchByID'
                    placeholder='Employee #'
                    onChange={this.setId}
                    value={this.state.searchId}
                  />
                  <InputGroupAddon addonType='append'>
                    <Button color='primary'>Search</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <ReimbursementContainerC
          reimbursements={this.state.reimbursements}
          currUser={this.props.currUser}
          {...this.props}
        />
      </>
    );
  }
}
