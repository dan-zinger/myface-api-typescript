import './App.css';
import { PostList } from './components/getpostlist';
import { UserViewPage} from './components/userview/userViewPage';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import {UsersPage} from './components/userspage.jsx'


function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/posts">
          <PostList/>
        </Route>
        <Route exact={true} path = "/users/:userId" /*children={<User />}*/ >
          <UserViewPage/>
        </Route>
        <Route path = "/users">
          <UsersPage/>
        </Route>
        <Route path = ''>
          <div>Sorry, that page doesn't exist. Try one of these:</div>
          <Link to="/posts"/>
          <Link to="/users"/>
        </Route>
      </Switch>
    </Router>

  );
}

function User() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { userId } = useParams();

  return (
    <UserViewPage
      userId = {userId}
  />);
}

export default App;
