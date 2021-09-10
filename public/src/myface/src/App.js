import './App.css';
import { PostList } from './components/getpostlist';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CreateNewUser } from './components/userview/createUser';
//import { UserViewPage} from './components/userview/userViewPage';

function App() {
  return (
      <section>
        <Router>

      <hr />
    
      <Switch>
        <Route path="/posts">
          <PostList/>
        </Route>
        <Route path = "/user/create">
          <CreateNewUser/>
        </Route>
      </Switch>
    </Router>
      </section>
  );
}

export default App;
