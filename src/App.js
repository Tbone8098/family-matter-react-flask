import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import RefitHome from './views/refitOnTheRoad/Home/Index';
import LandingPage from './views/landingPage/Index'
import Blog from './views/adventureAwaits/Home/Index'
import WebWorkx from './views/webworkx/home'

import './App.css';
import './js/modal.js'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={< LandingPage />} /> 
          <Route path="/refit-on-the-road" element={<RefitHome />} />
          <Route path="/home" element={<Blog />} />
          <Route path="/webworkx" element={<WebWorkx />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
