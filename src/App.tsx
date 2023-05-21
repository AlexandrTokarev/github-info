import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import Repositories from './components/Repositories/Repositories';
import Search from './components/Search/Search';
import UserCard from './components/UserCard/UserCard';
import { GitHubProvider } from './context/GitHubContext';

const App = () => {
  return (
    <GitHubProvider>
      <Header />
      <Container className="pt-3 pb-3">
        <Search />
        <UserCard />
        <Repositories />
      </Container>
    </GitHubProvider>
  );
};

export default App;
