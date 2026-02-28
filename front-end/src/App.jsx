import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import InteractiveBackground from "./components/InteractiveBackground";
// 1. Create a Wrapper Component to handle conditional rendering
const AppContent = () => {
  const location = useLocation();

  // Define the routes where you want to HIDE the Navbar and Footer
  const isAuthOrAdmin =
    location.pathname === "/myport_login" ||
    location.pathname.startsWith("/admin");

  return (
    <>

    
   
      <ScrollToTop />

     
      {!isAuthOrAdmin && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myport_login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* 3. Only show Footer if NOT on login or admin pages */}
      {!isAuthOrAdmin && <Footer />}
    </>
  );
};

// 4. Main App Component stays clean
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
