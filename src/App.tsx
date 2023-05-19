import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import Search from './components/Search/Search';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Search />
      </Container>
    </>
  );
};

export default App;
