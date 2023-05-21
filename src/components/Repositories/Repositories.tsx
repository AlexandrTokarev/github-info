import { FC, useMemo } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';

import { useGitHub } from '@/hooks/useGitHub';

const Repositories: FC = () => {
  const { user, repos } = useGitHub();

  const list = useMemo(() => {
    return repos.list.filter((repo) => repo.name !== user?.login);
  }, [repos.list, user?.login]);

  if (!user) {
    return null;
  }

  return (
    <>
      <h5>Public repositories: {list.length}</h5>
      {repos.isLoading && <Spinner animation="border" />}
      <Accordion>
        {list.map((repo) => (
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
