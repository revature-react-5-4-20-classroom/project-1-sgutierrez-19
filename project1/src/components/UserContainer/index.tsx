import React from 'react';
import { UserCardC } from '../UserCard';

import './style.css';
import { User } from '../../model/user';
import { Row, Col } from 'reactstrap';

interface IUserContainerCProps {
  currUser: User;
}

export class UserContainerC extends React.Component<IUserContainerCProps, any> {
  // commenting out due to chrome console warning: Useless constructor  @typescript-eslint/no-useless-constructor
  // constructor(props: IUserContainerCProps) {
  //   super(props);
  // }

  render() {
    return (
      <Row>
        <Col xs={6} className='offset-3'>
          <div className='user-div'>
            <UserCardC currUser={this.props.currUser} />
          </div>
        </Col>
      </Row>
    );
  }
}
