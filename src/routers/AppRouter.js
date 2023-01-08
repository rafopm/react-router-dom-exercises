import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import NavBar from "./NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import CategoriesPage from "../pages/CategoriesPage";
import '../styles/navBar.css'
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import PaymentsPage from "../pages/PaymentsPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route exact path="/profile/:username" element={<ProfilePage />} />
          <Route exact path="/categories" element={<CategoriesPage />} />

          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />

          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/payments" element={<PaymentsPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

