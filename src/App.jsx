import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Detect from './pages/Detect';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Prevention from './pages/Prevention';
import Weather from './pages/Weather';
import ChatWindow from './components/chat/ChatWindow';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detect" element={<Detect />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/prevention" element={<Prevention />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </main>
        {/* <ChatWindow /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;