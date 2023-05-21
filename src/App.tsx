import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import { GitHubProvider } from './context/AppContext';

const App = () => {
  return (
    <GitHubProvider>
      <Header />
      <Container>
        <Search />
      </Container>
    </GitHubProvider>
  );
};

export default App;
