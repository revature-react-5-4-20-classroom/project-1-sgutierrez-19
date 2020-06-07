import React from 'react';
import { UserCardC } from '../UserCard';

import './style.css';
import { User } from '../../model/user';
import { Row, Col } from 'reactstrap';

interface IAllUsersContainerCProps {
  allUsers: User[] | null;
}

export class AllUsersContainerC extends React.Component<
  IAllUsersContainerCProps,
  any
> {
  // commenting out due to chrome console warning: Useless constructor  @typescript-eslint/no-useless-constructor
  // constructor(props: IAllUsersContainerCProps) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <Row>
          <Col xs={6} className='offset-3'>
            <div className='user-div'>
              {this.props.allUsers &&
                this.props.allUsers.map((u) => {
                  return <UserCardC key={u.id} currUser={u} />;
                })}
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
