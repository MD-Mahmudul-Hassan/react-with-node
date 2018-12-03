import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Home from "./Home";
import Dashboard from "./Dashboard";

class Header extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">SJI Stack Overflow </Link>          
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/registration">Registration</Link>
                </li>
                <li className="nav-item text-right">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item text-right">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>          
            </div>
          <div>
            <Route exact path="/" component={Home} /> 
            <Route path="/login" component={Login} />          
            <Route path="/registration" component={Registration} />
            <Route path="/dashboard" component={Dashboard} />
          </div>

        </div>
        </BrowserRouter>
    );
  }
}

export default Header;