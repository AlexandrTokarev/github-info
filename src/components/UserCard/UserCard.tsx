import { FC } from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

import { useGitHub } from '@/hooks/useGitHub';

const UserCard: FC = () => {
  const { user } = useGitHub();

  if (!user) {
    return null;
  }

  return (
    <Card className="mb-3 mt-3 p-3" style={{ maxWidth: 720 }}>
      <Row className="justify-content-center">
        <Col xs="12" md="6">
          <Image className="w-100 rounded-3" src={user.avatar_url} />
        </Col>
        <Col xs="12" md="6">
          <Card.Title>{user.name}</Card.Title>
          <p className="fw-bold">City: {user.location ?? '-'}</p>
          <p className="fw-bold">Email: {user.email ?? '-'}</p>
          <p className="fw-bold">Company: {user.company ?? '-'}</p>
          <p className="fw-bold">Bio: {user.bio ?? '-'}</p>
        </Col>
      </Row>
    </Card>
  );
};

export default UserCard;
