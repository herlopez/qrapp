import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import QRgen from './pages/QRgenerator'
import QRscan from './pages/QRscanner'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr_generator" element={<QRgen />} />
        <Route path="/qr_scanner" element={<QRscan />} />
      </Routes>
    </Router>
  );
}

export default App;