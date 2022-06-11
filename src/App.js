import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import 'App.scss';
import Header from 'components/Header';
import CreateRoutes from 'routes/Routes';

function App() {
  return(
    <div className="App">
      <Router>
        <Header />
        <CreateRoutes />
      </Router>
    </div>
  )
}

export default App;
