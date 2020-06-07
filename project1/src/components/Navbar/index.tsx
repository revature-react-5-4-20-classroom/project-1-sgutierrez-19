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
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { User } from '../../model/user';

interface INavBarCompProps {
  logoutUser: () => void;
  currUser: User | null;
}

interface INavbarCompState {
  isOpen: boolean;
}
export class NavbarComp extends React.Component<
  INavBarCompProps,
  INavbarCompState
> {
  constructor(props: INavBarCompProps) {
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
                <DropdownMenu>
                  <DropdownItem>Review Pending Reimbursements</DropdownItem>
                  <DropdownItem>View Past Reimbursements</DropdownItem>
                  <DropdownItem>Emp Reimbursement Search</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Employees
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>View All Employees</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Profile
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>View Profile</DropdownItem>
                  <DropdownItem>Update Profile</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <NavItem>
            <NavLink
              onClick={this.props.logoutUser}
              to='/logout'
              className='nav-link'
              activeClassName='active'
            >
              Logout
            </NavLink>
          </NavItem>
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
                <DropdownMenu>
                  <DropdownItem>Submit New Reimbursement</DropdownItem>
                  <DropdownItem>View Pending Reimbursements</DropdownItem>
                  <DropdownItem>View Past Reimbursements</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Profile
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>View Profile</DropdownItem>
                  <DropdownItem>Update Profile</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <NavItem>
            <NavLink
              onClick={this.props.logoutUser}
              to='/logout'
              className='nav-link'
              activeClassName='active'
            >
              Logout
            </NavLink>
          </NavItem>
        </Navbar>
      </div>
    );
  };

  guestNav = () => {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>RMS</NavbarBrand>
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
