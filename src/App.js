import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Subscription from "./components/Subscription.js";
import Services from "./components/Services.js";
import Testimonials from "./components/Testimonials.js";
import Stats from "./components/Stats.js";
import Inspiration from "./components/Inspiration.js";
import Team from "./components/Team.js";
import ReceantWork from "./components/ReceantWork.js";
import About from "./components/About.js";
import Dashboard from "./components/Dashboard.js";
import Preloader from "./components/Preloader.js";

function App() {
  return (
    <div>

      <Preloader />

      <div className="wrapper">

        <Header />

        <Dashboard />

        <About />

        <ReceantWork />

        <Team />

        <Inspiration />

        <Stats />

        <Testimonials />

        <Services />

        <Subscription />

        <Footer />

      </div>
    </div>
  );
}

export default App;