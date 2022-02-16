import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import Comments from "./components/Comments";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./containers/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              // <ProtectedRoute>
                <Dashboard />
              // {/* </ProtectedRoute> */}
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/comments/:id" element={<Comments />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
