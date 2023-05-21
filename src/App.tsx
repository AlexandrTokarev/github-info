import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import Repositories from './components/Repositories/Repositories';
import Search from './components/Search/Search';
import { GitHubProvider } from './context/GitHubContext';

const App = () => {
  return (
    <GitHubProvider>
      <Header />
      <Container>
        <Search />
        <Repositories />
      </Container>
    </GitHubProvider>
  );
};

export default App;
