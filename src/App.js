import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Subscription from "./components/Subscription/Subscription.js";
import Services from "./components/Services/Services.js";
import Stats from "./components/Stats/Stats.js";
import Inspiration from "./components/Inspiration/Inspiration.js";
import Team from "./components/Team/Team.js";
import Work from "./components/Work/Work.js";
import About from "./components/About/About.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Preloader from "./components/Preloader/Preloader.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Logout from "./components/Logout/Logout.js";

function App() {
  return (
    <div>

      <Preloader />

      <Header />

      <main className="wrapper">
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        </Routes>

        <About />

        <Work />

        <Team />

        <Inspiration />

        <Stats />

        <Services />

        <Subscription />

        <Footer />

      </main>
    </div>
  );
}

export default App;