import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Mentorship from "./components/pages/Mentorship/Mentorship";
import Mentors from "./components/pages/Mentorship/Mentors";
import Mentees from "./components/pages/Mentorship/Mentees";
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <UserContext.Provider value={{userData, setUserData}}> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/mentorship' component={Mentorship} />
              <Route path='/mentors' component={Mentors} />
              <Route path='/mentees' component={Mentees} />
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
