import { Link } from "react-router-dom";
import { useAuthContext } from '../../contexts/AuthContext.js';
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuthContext();

  const userButtons = (
    <>
      <Link to="/catalog" className="button button-custom theme_background_color">Check Catalog</Link>
      <Link to="/about" className="button button-custom-outline">About Us</Link>
    </>
  );

  const guestButtons = (
    <>
      <Link to="/register" className="button button-custom theme_background_color">Sign Up</Link>
      <Link to="/about" className="button button-custom-outline">About Us</Link>
    </>
  );


  return (
    <section className="main-heading" id="home">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="main-heading-content col-md-12 col-sm-12 text-center">
              <h1 className="main-heading-title">The best deals</h1>
              <p className="main-heading-text">The best clothing deals are here! Check them out, like and share the latest amazing offers.</p>
              <p className="main-heading-text">Join our community and help everyone to get a great deal!</p>
              <div className="button-bar">
                {user._id
                  ? userButtons
                  : guestButtons}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Dashboard;