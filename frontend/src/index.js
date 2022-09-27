import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { App, OtherApp } from './App';
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
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/app">App</Link>
            </li>
            <li>
              <Link to="/other">OtherApp</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/app">
            <App />
          </Route>
          <Route path="/other">
            <OtherApp />
          </Route>
        </Routes>
      </div>

    </Router>
  </React.StrictMode>
);


function App() {
  return (
          <h1>App</h1>
  )
}

function OtherApp() {
  return (
          <h1>OtherApp</h1>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
