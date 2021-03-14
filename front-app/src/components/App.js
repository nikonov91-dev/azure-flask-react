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
        <Route path={location.href + "/files"}>
          <FileManager/>
        </Route>
        <Route path={location.href + "/weather"}>
          <WeatherMonitor/>
        </Route>
        <Route path={location.href + '/'}>
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
          <Link to={location.href + '/'}>Home</Link>
        </li>
        <li>
          <Link to={location.href + "/files"}>FileManager</Link>
        </li>
        <li>
          <Link to={location.href + "/weather"}>Weather</Link>
        </li>
      </ul>
    </nav>
  </div>
}