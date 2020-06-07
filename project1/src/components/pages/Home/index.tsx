import React from 'react';
import { User } from '../../../model/user';
import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

interface IHomeCProps {
  currUser: User | null;
  history: any;
  match: any;
}

export class HomeC extends React.Component<IHomeCProps, any> {
  // commenting out due to chrome console warning: Useless constructor  @typescript-eslint/no-useless-constructor
  // constructor(props: IHomeCProps) {
  //   super(props);
  // }

  empHome = () => {
    return (
      <>
        <Row>
          <Col xs={6}>
            <Card>
              <CardBody>
                <CardTitle>
                  <h3>Reimbursements</h3>
                </CardTitle>
                <CardText>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push(
                        '/employee/reimbursements/submit'
                      );
                    }}
                  >
                    Submit New Reimbursement
                  </Button>
                </CardText>
                <CardText>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push(
                        '/employee/reimbursements/pending'
                      );
                    }}
                  >
                    View Pending Reimbursements
                  </Button>
                </CardText>
                <CardText>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push(
                        '/employee/reimbursements/history'
                      );
                    }}
                  >
                    View Past Reimbursements
                  </Button>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs={6}>
            <Card>
              <CardBody>
                <CardTitle>
                  <h3>Profile</h3>
                </CardTitle>
                <CardText>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push('/employee/profile/view');
                    }}
                  >
                    View Profile
                  </Button>
                </CardText>
                <CardText>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push('/employee/profile/update');
                    }}
                  >
                    Update Profile
                  </Button>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  };

  fManHome = () => {
    return (
      <>
        <Row>
          <Col xs={6}>
            <Card>
              <CardBody>
                <CardTitle>
                  <h3>Reimbursements</h3>
                </CardTitle>
                <CardText>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push('/manager/reimbursements/review');
                    }}
                  >
                    Review Pending Reimbursements
                  </Button>
                </CardText>
                <CardText>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push(
                        '/manager/reimbursements/history'
                      );
                    }}
                  >
                    View Past Reimbursements
                  </Button>
                </CardText>
                <CardText>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push('/manager/reimbursements/search');
                    }}
                  >
                    Search By Employee
                  </Button>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={12}>
                <Card>
                  <CardBody>
                    <CardTitle>
                      <h3>Employees</h3>
                    </CardTitle>
                    <CardText>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push('/manager/employees');
                        }}
                      >
                        View All Employees
                      </Button>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Card>
                  <CardBody>
                    <CardTitle>
                      <h3>Profile</h3>
                    </CardTitle>
                    <CardText>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push('/manager/profile/view');
                        }}
                      >
                        View Profile
                      </Button>
                    </CardText>
                    <CardText>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push('/manager/profile/update');
                        }}
                      >
                        Update Profile
                      </Button>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  };

  whichHome = () => {
    const userRole = this.props.currUser && this.props.currUser.role;
    if (userRole === 'Employee') {
      return this.empHome();
    } else if (userRole === 'Finance Manager') {
      return this.fManHome();
    } else {
      return <h1>NOTHING</h1>;
    }
  };

  render() {
    const renderedHomer = this.whichHome();
    return <>{renderedHomer}</>;
  }
}
