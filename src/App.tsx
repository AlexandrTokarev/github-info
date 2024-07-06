import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

import { Header } from './components/Header/Header';
import { Repositories } from './components/Repositories/Repositories';
import { Search } from './components/Search/Search';
import { UserCard } from './components/UserCard/UserCard';
import { GitHubProvider } from './context/GitHubContext';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <GitHubProvider>
      <ToastContainer position="top-right" autoClose={5000} />
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
