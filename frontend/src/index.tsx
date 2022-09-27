import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App, OtherApp } from './App'
import { handleStravaLogin } from './StravaLogin'
import { 
  BrowserRouter as Router,
  Link, 
  Route,
  Routes, 
} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root') as Element)
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
              <Link onClick={handleStravaLogin} to="/login/strava">Login with Strava</Link>
            </li>
            <li>
              <Link to="/other">OtherApp</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" />
          <Route path="/other" element={<OtherApp />} />
        </Routes>
      </div>

    </Router>
  </React.StrictMode>
)
