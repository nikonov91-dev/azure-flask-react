import dotevn from 'dotenv';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FileManager from './FilesManager';
import WeatherMonitor from './WeatherMonitor';
import '../styles/App.css';
dotevn.config()


const App = () => {
  return <div>
    <Router>
      <NavBar/>
      <Switch>
        <Route path={process.env.REACT_APP_FRONT_APP_URL + "/files"}>
          <FileManager/>
        </Route>
        <Route path={process.env.REACT_APP_FRONT_APP_URL + "/weather"}>
          <WeatherMonitor/>
        </Route>
        <Route path={process.env.REACT_APP_FRONT_APP_URL}>
          <div>
            <FileManager/>
            <WeatherMonitor/>
          </div>
        </Route>
      </Switch>
    </Router>
  </div>
}

export default App;

const NavBar = () => {
  return <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/files">FileManager</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
      </ul>
    </nav>
  </div>
}