import React from 'react';
import { User } from '../../../model/user';
import { Row, Col } from 'reactstrap';

interface IHomeCProps {
  currUser: User | null;
  history: any;
  match: any;
}

export class HomeC extends React.Component<IHomeCProps, any> {
  constructor(props: IHomeCProps) {
    super(props);
  }

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
                    View Open Reimbursements
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
                  <button>Update Profile</button>
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
                      this.props.history.push('/employee/reimbursements/view');
                    }}
                  >
                    Review Open Reimbursements
                  </button>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <button>View Past Reimbursements</button>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <button>Search By Employee</button>
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
                      <button>View All Employees</button>
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
                      <button>View Profile</button>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <button>Update Profile</button>
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
    console.log('HOMEPAGE: ', userRole);
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
