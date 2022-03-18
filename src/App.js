
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Wallet from "./pages/Wallet";
import Login from "./Auth/Login";
import ImageDetail from "./pages/Details";


function Main() {
  return (
    <>
        <Routes>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="wallet" element={<Wallet />} />
            <Route  path=":id" element={<ImageDetail />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;


