import React, { useRef } from 'react';

import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import Main from './components/main/main';
import Presale from './components/presale/presale';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/presale" element={<Presale />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
