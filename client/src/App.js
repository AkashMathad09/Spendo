import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.js'; 
import Dashboard from './pages/dashboard.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
