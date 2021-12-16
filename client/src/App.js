import RefitHome from './views/refitOnTheRoad/Home/Index';
import LandingPage from './views/landingPage/Index'
import Blog from './views/adventureAwaits/Home/Index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './style/main.css'
import './js/modal.js'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={< LandingPage />} /> 
          <Route path="/refit-on-the-road" element={<RefitHome />} />
          <Route path="/home" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
