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
        <Route path={"/files"}>
          <FileManager/>
        </Route>
        <Route path={"/weather"}>
          <WeatherMonitor/>
        </Route>
        <Route path={'/'}>
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
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={"/files"}>FileManager</Link>
        </li>
        <li>
          <Link to={"/weather"}>Weather</Link>
        </li>
      </ul>
    </nav>
  </div>
}