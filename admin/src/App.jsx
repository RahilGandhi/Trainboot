import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Dashboard, Player, AccessCode } from "./pages";
import { SharedLayout } from "./components";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="h-screen grid place-items-center">
        <img src="images/animation.svg" alt="" />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccessCode />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/:id"
          element={
            <PrivateRoute>
              <Player />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
