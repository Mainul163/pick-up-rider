
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Error from './Component/Error/Error';
import Login from './Component/Login/Login';
import Destination from './Component/Destination/Destination';
import { createContext, useState } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
 export const UserContext=createContext();
function App() {
           
      const [logInUser,setLogInUser]=useState({
       
      })
  return (
    <UserContext.Provider value={[logInUser,setLogInUser]}>
      
      <Router>
      <p style={{fontSize:'30px',backgroundColor:'yellow',display:"inline"}}>{logInUser.displayName}</p>
      <p style={{fontSize:'30px',backgroundColor:'yellow',display:"inline"}}>{logInUser.name}</p>
      <Header></Header>
        <Switch>

         <Route path="/home">
           <Home></Home>
         </Route>
         
         <Route path="/login">
           <Login></Login>
           </Route>
           
       <PrivateRoute  path="/destination/:details">
       <Destination></Destination>
       </PrivateRoute>

         <Route exact path="/">
         <Home></Home>
         </Route>


        <Route path="*">
            <Error></Error>
        </Route>

        </Switch>

      </Router>
      </UserContext.Provider>
   
  );
}

export default App;
