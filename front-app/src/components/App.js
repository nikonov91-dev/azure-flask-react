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


const App = () => {
  return <div>
    <Router>
      <NavBar/>
      <Switch>
        <Route path={window.location.href + "/files"}>
          <FileManager/>
        </Route>
        <Route path={window.location.href + "/weather"}>
          <WeatherMonitor/>
        </Route>
        <Route path={window.location.href + '/'}>
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
          <Link to={window.location.href + '/'}>Home</Link>
        </li>
        <li>
          <Link to={window.location.href + "/files"}>FileManager</Link>
        </li>
        <li>
          <Link to={window.location.href + "/weather"}>Weather</Link>
        </li>
      </ul>
    </nav>
  </div>
}