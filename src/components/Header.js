const Header = () => {
    return(
        <nav  className=" nim-menu navbar navbar-default navbar-fixed-top">
        <div className="container">
  
        <div className="navbar-header">
        <button type ="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="index.html">N<span className="themecolor">i</span>M</a>
        </div>
  
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
        <li><a href="#home" className="page-scroll">Home</a></li>
        <li><a href="#one" className="page-scroll">About</a></li>
        <li><a href="#two" className="page-scroll">Our Works</a></li>
        <li><a href="#three" className="page-scroll">Team</a></li>
        <li><a href="#four" className="page-scroll">Inspiration</a></li>
        <li><a href="#five" className="page-scroll">Status</a></li>
        <li><a href="#six" className="page-scroll">Testimonials</a></li>
        <li><a href="#seven" className="page-scroll">Services</a></li>
        <li><a href="#eight" className="page-scroll">Contact</a></li>
        </ul>
        </div>
        </div>
      </nav>
    );
};

export default Header;