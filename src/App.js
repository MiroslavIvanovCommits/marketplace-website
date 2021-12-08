import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Subscription from "./components/Subscription/Subscription.js";
import Services from "./components/Services/Services.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import Stats from "./components/Stats/Stats.js";
import Inspiration from "./components/Inspiration/Inspiration.js";
import Team from "./components/Team/Team.js";
import ReceantWork from "./components/ReceantWork/ReceantWork.js";
import About from "./components/About/About.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Preloader from "./components/Preloader/Preloader.js";

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