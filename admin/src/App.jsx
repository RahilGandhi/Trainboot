import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  AccessCode,
  Announcement,
  Task,
  Training,
  Employees,
} from "./pages";
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
          path="/add-new-training"
          element={
            <PrivateRoute>
              <Training />
            </PrivateRoute>
          }
        />

        <Route
          path="/create-announcement"
          element={
            <PrivateRoute>
              <Announcement />
            </PrivateRoute>
          }
        />

        <Route
          path="/assign-task"
          element={
            <PrivateRoute>
              <Task />
            </PrivateRoute>
          }
        />

        <Route
          path="/employees"
          element={
            <PrivateRoute>
              <Employees />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
