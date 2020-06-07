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
          <NavbarBrand href='/home'>RMS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Reimbursements
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    href='/manager/reimbursements/review'
                    className='nav-link'
                    activeClassName='active'
                  >
                    Review Pending Reimbursements
                  </DropdownItem>
                  <DropdownItem
                    href='/manager/reimbursements/history'
                    className='nav-link'
                    activeClassName='active'
                  >
                    View Past Reimbursements
                  </DropdownItem>
                  <DropdownItem
                    href='/manager/reimbursements/search'
                    className='nav-link'
                    activeClassName='active'
                  >
                    Emp Reimbursement Search
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Employees
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    href='/manager/employees'
                    className='nav-link'
                    activeClassName='active'
                  >
                    View All Employees
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Profile
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    href='/manager/profile/view'
                    className='nav-link'
                    activeClassName='active'
                  >
                    View Profile
                  </DropdownItem>
                  <DropdownItem
                    href='/manager/profile/update'
                    className='nav-link'
                    activeClassName='active'
                  >
                    Update Profile
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <NavLink
            onClick={this.props.logoutUser}
            to='/logout'
            className='nav-link'
            activeClassName='active'
          >
            Logout
          </NavLink>
        </Navbar>
      </div>
    );
  };

  empNav = () => {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/home'>RMS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Reimbursements
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    href='/employee/reimbursements/sub'
                    className='nav-link'
                    activeClassName='active'
                  >
                    Submit New Reimbursement
                  </DropdownItem>
                  <DropdownItem
                    href='/employee/reimbursements/pending'
                    className='nav-link'
                    activeClassName='active'
                  >
                    View Pending Reimbursements
                  </DropdownItem>
                  <DropdownItem
                    href='/employee/reimbursements/history'
                    className='nav-link'
                    activeClassName='active'
                  >
                    View Past Reimbursements
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Profile
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    href='/employee/profile/view'
                    className='nav-link'
                    activeClassName='active'
                  >
                    View Profile
                  </DropdownItem>
                  <DropdownItem
                    href='/employee/profile/update'
                    className='nav-link'
                    activeClassName='active'
                  >
                    Update Profile
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <NavLink
            onClick={this.props.logoutUser}
            to='/logout'
            className='nav-link'
            activeClassName='active'
          >
            Logout
          </NavLink>
        </Navbar>
      </div>
    );
  };

  guestNav = () => {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/landing'>RMS</NavbarBrand>
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
