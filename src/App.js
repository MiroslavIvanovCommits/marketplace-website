import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Subscription from "./components/Subscription/Subscription.js";
import Services from "./components/Services/Services.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import Stats from "./components/Stats/Stats.js";
import Inspiration from "./components/Inspiration/Inspiration.js";
import Team from "./components/Team/Team.js";
import Work from "./components/Work/Work.js";
import About from "./components/About/About.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Preloader from "./components/Preloader/Preloader.js";

function App() {
  return (
    <div>

      <Preloader />

      <Header />

      <main className="wrapper">
        <Routes>
        <Route path="/" element={<Dashboard />} />
        </Routes>

        <About />

        <Work />

        <Team />

        <Inspiration />

        <Stats />

        <Testimonials />

        <Services />

        <Subscription />

        <Footer />

      </main>
    </div>
  );
}

export default App;