import { FC } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';

import { useGitHub } from '@/hooks/useGitHub';

const Repositories: FC = () => {
  const { user, repos } = useGitHub();

  if (!user) {
    return null;
  }

  return (
    <>
      <h5>Public repositories</h5>
      {repos.isLoading && <Spinner animation="border" />}
      <Accordion>
        {repos.list.map((repo) => (
          <Accordion.Item key={repo.id} eventKey={String(repo.id)}>
            <Accordion.Header>{repo.name}</Accordion.Header>
            <Accordion.Body>Body</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default Repositories;
