import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { useGitHub } from '@/hooks/useGitHub';

const Search: FC = () => {
  const [name, setName] = useState('');

  const { loadUser } = useGitHub();

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loadUser(name);
    setName('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-2">
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control placeholder="Enter username" name="name" value={name} onChange={handleChangeName} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!name}>
        Search
      </Button>
    </Form>
  );
};

export default Search;
