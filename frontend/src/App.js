import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Mentorship from "./components/pages/Mentorship/Mentorship";
import Mentors from "./components/pages/Mentorship/Mentors";
import Mentees from "./components/pages/Mentorship/Mentees";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Register from "./components/pages/Register";
import Register2 from "./components/pages/Register2";
import Families from "./components/pages/Trees/Families";
import Og from "./components/pages/Trees/Og";
import Disney from "./components/pages/Trees/Disney";
import Oranges from "./components/pages/Trees/Oranges";
import Tna from "./components/pages/Trees/Tna";
import Messages from "./components/pages/Message/Messages";
import Profile from "./components/pages/Profile/Profile";
import EditProfile from "./components/pages/Profile/EditProfile";
import OtherProfile from "./components/pages/Profile/OtherProfile";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/EnterNewPass";

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
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/about' component={About} />
              <Route path='/trees' component={Families} />
              <Route path='/og' component={Og} />
              <Route path='/disney' component={Disney} />
              <Route path='/oranges' component={Oranges} />
              <Route path='/tna' component={Tna} />
              <Route path='/messages' component={Messages} />
              <Route path='/profile' component={Profile} />
              <Route path='/editprofile' component={EditProfile} />
              <Route path='/otherProfile/:id' component={OtherProfile} />
              <Route path='/register2' component={Register2} />
              <Route path='/fp' component={ForgotPassword} />
              <Route path='/reset/:token' component={ResetPassword} />
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
