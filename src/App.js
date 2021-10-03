import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Fun from './components/pages/Fun';
import Resume from './components/pages/Resume';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Router>
				<Navbar />
        <Switch>
          <Route path = '/Projects' exact component={Projects}/>
          <Route path = '/Fun' exact component={Fun}/>
          <Route path = '/resume' exact component={Resume}/>
        </Switch>
        <Footer />
			</Router>
    </>
  );
}

export default App;