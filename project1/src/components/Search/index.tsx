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
  resultHeader: string;
}
export class SearchC extends React.Component<ISearchCProps, ISearchCState> {
  constructor(props: ISearchCProps) {
    super(props);
    this.state = {
      searchId: undefined,
      reimbursements: null,
      resultHeader: '',
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
    if (reimArr) {
      this.setState({
        resultHeader: `${reimArr.length} reimbursements found for ${reimArr[0].author}`,
      });
    }
    this.setState({
      reimbursements: reimArr,
    });
  };

  render() {
    return (
      <>
        <Row id='testingtesting' className='search-row'>
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
        <h3 className='status-notification'>
          {this.state.resultHeader && this.state.resultHeader}
        </h3>
        <ReimbursementContainerC
          reimbursements={this.state.reimbursements}
          currUser={this.props.currUser}
          {...this.props}
        />
      </>
    );
  }
}
