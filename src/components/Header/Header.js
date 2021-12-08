import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" nim-menu navbar navbar-default navbar-fixed-top">
      <div className="container">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">N<span className="themecolor">i</span>M</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/" className="button">Home</Link></li>
            <li><Link to="/about" className="button">About</Link></li>
            <li><Link to="/work" className="button">Our Works</Link></li>
            <li><Link to="/team" className="button">Team</Link></li>
            <li><Link to="/inspiration" className="button">Inspiration</Link></li>
            <li><Link to="/stats" className="button">Status</Link></li>
            <li><Link to="/testimonials" className="button">Testimonials</Link></li>
            <li><Link to="/services" className="button">Services</Link></li>
            <li><Link to="/contact" className="button">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;