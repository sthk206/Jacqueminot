import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <UserContext.Provider value={{userData, setUserData}}> */}
            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/reset/:id' component={ResetPassword} /> */}
              {/* <PrivateRoute path='/todo' component={Todo} />
              <PrivateRoute path='/calendar' component={Calendar} />
              <PrivateRoute path='/profile' component={Profile} /> */}
            </Switch>
        {/* </ UserContext.Provider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
