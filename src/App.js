import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/taskmanager.css';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css'
import './css/styles.css';
import Home from '../src/component/home.js';
import New from '../src/component/new.js';
import Doing from '../src/component/doing.js';
export default function App() {
  return (
    <Router>
      <div>
        <h4>To Do List</h4>
        <nav >
        <ul className="d-flex justify-content-start">
                              <li>
                              <Link to="/">Done</Link>
                              </li>
                             <li><Link to="/doing">Doing</Link></li>
                              <li><Link to="/new">New</Link></li>
                            </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/doing">
            <Doing 
            />
          </Route>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
