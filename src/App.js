import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.js";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Newsletter from "./components/Newsletter/Newsletter.js";
import Services from "./components/Services/Services.js";
import Stats from "./components/Stats/Stats.js";
import Work from "./components/Work/Work.js";
import About from "./components/About/About.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Preloader from "./components/Preloader/Preloader.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Logout from "./components/Logout/Logout.js";
import Create from "./components/Create/Create.js";


function App() {

  return (
    <AuthProvider>
    <div>

      <Preloader />

      <Header />

      <main className="wrapper">
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/services" element={<Services />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/create" element={<Create />} />
        </Routes>

        <Footer />

      </main>
    </div>
    </AuthProvider>
  );
}

export default App;