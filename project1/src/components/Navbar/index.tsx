import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { User } from '../../model/user';

import './style.css';

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
      <Navbar className='navbar-div' color='dark' dark expand='md'>
        <Link className='navbar-brand' to='/'>
          RMS
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Reimbursements
              </DropdownToggle>
              <DropdownMenu>
                <Link
                  to='/manager/reimbursements/review'
                  className='nav-link dark-text'
                >
                  Review Pending Reimbursements
                </Link>
                <Link
                  to='/manager/reimbursements/history'
                  className='nav-link dark-text'
                >
                  View Past Reimbursements
                </Link>
                <Link
                  to='/manager/reimbursements/search'
                  className='nav-link dark-text'
                >
                  Emp Reimbursement Search
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Employees
              </DropdownToggle>
              <DropdownMenu>
                <Link to='/manager/employees' className='nav-link dark-text'>
                  View All Employees
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Profile
              </DropdownToggle>
              <DropdownMenu>
                <Link to='/manager/profile/view' className='nav-link dark-text'>
                  View Profile
                </Link>
                <Link
                  to='/manager/profile/update'
                  className='nav-link dark-text'
                >
                  Update Profile
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <NavLink
          onClick={this.props.logoutUser}
          to='/logout'
          className='nav-link light-text'
          activeClassName='active'
        >
          Logout
        </NavLink>
      </Navbar>
    );
  };

  empNav = () => {
    return (
      <Navbar className='navbar-div' color='dark' dark expand='md'>
        <Link className='navbar-brand' to='/'>
          RMS
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Reimbursements
              </DropdownToggle>
              <DropdownMenu>
                <Link
                  to='/employee/reimbursements/submit'
                  className='nav-link dark-text'
                >
                  Submit New Reimbursement
                </Link>
                <Link
                  to='/employee/reimbursements/pending'
                  className='nav-link dark-text'
                >
                  View Pending Reimbursements
                </Link>
                <Link
                  to='/employee/reimbursements/history'
                  className='nav-link dark-text'
                >
                  View Past Reimbursements
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Profile
              </DropdownToggle>
              <DropdownMenu>
                <Link
                  to='/employee/profile/view'
                  className='nav-link dark-text'
                >
                  View Profile
                </Link>
                <Link
                  to='/employee/profile/update'
                  className='nav-link dark-text'
                >
                  Update Profile
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <NavLink
          onClick={this.props.logoutUser}
          to='/logout'
          className='nav-link light-text'
          activeClassName='active'
        >
          Logout
        </NavLink>
      </Navbar>
    );
  };

  guestNav = () => {
    return (
      <Navbar color='dark' dark expand='md'>
        <Link className='navbar-brand' to='/'>
          RMS
        </Link>
      </Navbar>
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
