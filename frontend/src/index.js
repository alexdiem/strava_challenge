import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, OtherApp } from './App';
import { StravaLogin } from './StravaLogin';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter as Router,
  Link, 
  Route,
  Routes, 
} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Strava Segment Challenge</h1>

    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login/strava">Login with Strava</Link>
            </li>
            <li>
              <Link to="/other">OtherApp</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" />
          <Route path="/login/strava" element={<StravaLogin />} />
          <Route path="/other" element={<OtherApp />} />
        </Routes>
      </div>

    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
