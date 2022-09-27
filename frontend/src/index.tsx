import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { handleStravaLogin, SegmentChallenge } from './StravaLogin'
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
              <Link to="/other">OtherApp</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/callback/exchange_token" element={<SegmentChallenge />} />
        </Routes>
      </div>

    </Router>
  </React.StrictMode>
)


function Index() {
  return (
    <p>Welcome. Please <Link onClick={handleStravaLogin} to="/login/strava">login with Strava</Link> to join the segment challenge.</p>
  )
}
