import logo from './logo.svg';
import './App.css';
import { Postlist } from './components/getpostlist';
import { UserViewPage} from './components/userview/userViewPage';

function App() {
  return (
      <section>
      Main section test
        <UserViewPage
        userId = {5}
        />
      </section>
  );
}

export default App;
