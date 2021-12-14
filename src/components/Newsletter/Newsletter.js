const Newsletter = () => {
  return (
    <section className="sub-form text-center" id="eight">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title">Subscribe to our <span className="themecolor"> News letter</span></h3>
            <p className="lead">Lorem ipsum dolor sit amet ne onsectetuer adipiscing elit.Aenean commodo ligula eget dolor in tashin ty</p>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-3"></div>
            <div className="col-md-6 center-block col-sm-6 ">
              <form id="mc-form">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Email Address" required id="mc-email" />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">SUBSCRIBE <i className="fa fa-envelope"></i> </button>
                  </span> </div>
                <label htmlFor="mc-email" id="mc-notification"></label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;