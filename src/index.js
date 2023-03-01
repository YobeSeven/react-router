import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import "./sass/app.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  const [users, setUsers] = useState([]);

  return (
    <React.StrictMode>
      <Router basename="/">
          <App setUsers={setUsers} users={users} />
      </Router>
    </React.StrictMode>
  );
}
root.render(<Index />, document.getElementById('root'));