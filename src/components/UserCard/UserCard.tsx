import { FC } from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

import { useGitHub } from '@/hooks/useGitHub';

const UserCard: FC = () => {
  const { user } = useGitHub();

  if (!user) {
    return null;
  }

  return (
    <Card className="mb-3 mt-3 p-3">
      <Row className="justify-content-center">
        <Col xs="12" lg="6">
          <Image className="w-100 rounded-3" src={user.avatar_url} />
        </Col>
        <Col xs="12" lg="6">
          <div className="d-flex flex-nowrap">
            <div className="fw-bold">Name:</div>
            <div>{user.name}</div>
          </div>
          <div className="d-flex flex-nowrap">
            <div className="fw-bold">City:</div>
            <div>{user.location}</div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default UserCard;
