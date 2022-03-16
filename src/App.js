import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import { useNavigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Wallet from "./pages/Wallet";
import Login from "./Auth/Login";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;

function Main() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/login")
  // }, [])
  return (
    <>
        <Routes>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
    </>
  );
}
