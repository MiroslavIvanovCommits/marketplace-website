import "./Footer.css";

const Footer = () => {
    return(
        <footer className="site-footer section-spacing text-center " id="">

        <div className="container">
        <div className="col-md-4">
        <p className="footer-links"><a>Made with ❤️ for SoftUni ReactJS course.</a></p>
        </div>
        <div className="col-md-4"> <small>&copy; 2021 Created by Miroslav Ivanov</small></div>
        <div className="col-md-4">
  
        <ul className="social">
        <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
        <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter "></i></a></li>
        <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li>
        </ul>
  
        </div>
        </div>
        </footer>
    );
};

export default Footer;