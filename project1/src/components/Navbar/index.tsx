import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

interface INavbarCompState {
  isOpen: boolean;
}
export class NavbarComp extends React.Component<any, INavbarCompState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  fManNav = () => {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>RMS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Reimbursements
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>Review Pending Reimbursements</DropdownItem>
                  <DropdownItem>View Past Reimbursements</DropdownItem>
                  <DropdownItem>Emp Reimbursement Search</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Employees
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>View All Employees</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Profile
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>View Profile</DropdownItem>
                  <DropdownItem>Update Profile</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };

  empNav = () => {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>RMS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Reimbursements
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>Submit New Reimbursement</DropdownItem>
                  <DropdownItem>View Pending Reimbursements</DropdownItem>
                  <DropdownItem>View Past Reimbursements</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Profile
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>View Profile</DropdownItem>
                  <DropdownItem>Update Profile</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };

  guestNav = () => {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>RMS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
    );
  };

  whichNav = () => {
    const loggedIn = this.props.currUser;
    const userRole = this.props.currUser && this.props.currUser.role;
    if (loggedIn && userRole === 'Employee') {
      return this.empNav();
    } else if (loggedIn && userRole === 'Finance Manager') {
      return this.fManNav();
    } else {
      return this.guestNav();
    }
  };
  render() {
    const renderedNavbar = this.whichNav();
    return <>{renderedNavbar}</>;
  }
}
