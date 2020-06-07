import React from 'react';
import { User } from '../../../model/user';
import { Row, Col } from 'reactstrap';

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
          <h1>EMPLOYEE HOMEPAGE</h1>
        </Row>
        <Row>
          <Col xs={6}>
            <div>
              <Row>
                <Col xs={12}>
                  <h3>Reimbursements</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push(
                        '/employee/reimbursements/submit'
                      );
                    }}
                  >
                    Submit New Reimbursement
                  </button>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push(
                        '/employee/reimbursements/pending'
                      );
                    }}
                  >
                    View Pending Reimbursements
                  </button>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push(
                        '/employee/reimbursements/history'
                      );
                    }}
                  >
                    View Past Reimbursements
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={6}>
            <div>
              <Row>
                <Col xs={12}>
                  <h3>Profile</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push('/employee/profile/view');
                    }}
                  >
                    View Profile
                  </button>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push('/employee/profile/update');
                    }}
                  >
                    Update Profile
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </>
    );
  };

  fManHome = () => {
    return (
      <>
        <Row>
          <h1>FINANCIAL MANAGER HOMEPAGE</h1>
        </Row>
        <Row>
          <Col xs={6}>
            <div>
              <Row>
                <Col xs={12}>
                  <h3>Reimbursements</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push('/manager/reimbursements/review');
                    }}
                  >
                    Review Pending Reimbursements
                  </button>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push(
                        '/manager/reimbursements/history'
                      );
                    }}
                  >
                    View Past Reimbursements
                  </button>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push('/manager/reimbursements/search');
                    }}
                  >
                    Search By Employee
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={12}>
                <div>
                  <Row>
                    <Col xs={12}>
                      <h3>Employees</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push('/manager/employees');
                        }}
                      >
                        View All Employees
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div>
                  <Row>
                    <Col xs={12}>
                      <h3>Profile</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push('/manager/profile/view');
                        }}
                      >
                        View Profile
                      </button>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push('/manager/profile/update');
                        }}
                      >
                        Update Profile
                      </button>
                    </Col>
                  </Row>
                </div>
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
