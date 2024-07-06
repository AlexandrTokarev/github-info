import type { FC } from 'react';
import { Navbar } from 'react-bootstrap';

const Header: FC = () => {
  return (
    <Navbar className="justify-content-center" bg="dark" variant="dark">
      <Navbar.Brand href="#">GitHub detail</Navbar.Brand>
    </Navbar>
  );
};

export { Header };
