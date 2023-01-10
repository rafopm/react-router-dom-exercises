import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import "../styles/navBar.css";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import PaymentsPage from "../pages/PaymentsPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import CategoriesRouter from "./CategoriesRouter";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="categories/*" element={<CategoriesRouter />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route exact path="/profile/:username" element={<ProfilePage />} />

        <Route
          exact
          path="/login"
          element={<PublicRoute component={LoginPage} />}
        />
        <Route
          exact
          path="/register"
          element={<PublicRoute component={RegisterPage} />}
        />

        <Route
          exact
          path="/dashboard"
          element={<PrivateRoute component={DashboardPage} />}
        />
        <Route
          exact
          path="/payments"
          element={<PrivateRoute component={PaymentsPage} />}
        />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;