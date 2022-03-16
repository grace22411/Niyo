
import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout';
import Wallet from './pages/Wallet';
import Login from './Auth/Login';

function App() {
  return (
    <>
        <Router>
        <Layout>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/wallet" element={<Wallet/>} />
            </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
