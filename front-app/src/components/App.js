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
        <Route path={process.env.PUBLIC_URL + "/files"}>
          <FileManager/>
        </Route>
        <Route path={process.env.PUBLIC_URL + "/weather"}>
          <WeatherMonitor/>
        </Route>
        <Route path={process.env.PUBLIC_URL + '/'}>
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
          <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/files"}>FileManager</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/weather"}>Weather</Link>
        </li>
      </ul>
    </nav>
  </div>
}