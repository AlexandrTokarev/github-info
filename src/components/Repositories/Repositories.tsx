import { type FC, useMemo, useState } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';
import { AccordionSelectCallback } from 'react-bootstrap/esm/AccordionContext';

import { useGitHub } from '@/hooks/useGitHub';

import { RepositoryInfo } from '../RepositoryInfo/RepositoryInfo';

const Repositories: FC = () => {
  const [activeKey, setActiveKey] = useState<string>();
  const { user, repos } = useGitHub();

  const list = useMemo(() => {
    return repos.list.filter((repo) => repo.name !== user?.login);
  }, [repos.list, user?.login]);

  if (!user) {
    return null;
  }

  const handleSelect: AccordionSelectCallback = (value) => {
    setActiveKey(value as string);
  };

  return (
    <>
      <h5>Public repositories: {list.length}</h5>
      {repos.isLoading && <Spinner animation="border" />}
      <Accordion activeKey={activeKey} onSelect={handleSelect}>
        {list.map((repo) => (
          <Accordion.Item key={repo.id} eventKey={String(repo.id)}>
            <Accordion.Header>{repo.name}</Accordion.Header>
            <Accordion.Body>
              <RepositoryInfo repo={repo} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export { Repositories };
