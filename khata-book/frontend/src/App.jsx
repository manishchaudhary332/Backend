import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import KhataDetails from "./pages/KhataDetails";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/profile" element={<div>Profile Page</div>} /> */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute> } />
        <Route path="/khata/:id" element={<KhataDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
