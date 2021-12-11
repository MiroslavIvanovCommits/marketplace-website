const Work = () => {
  return (
    <section className="recent-works text-center" id="two">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title">Recent <span className="themecolor">Works</span></h3>
            <p className="a-slog">Lorem ipsum dolor sit amet ne onsectetuer adipiscing elit.Aenean commodo ligula eget dolor in tashin ty</p>
          </div>
        </div>

        <div className="gap"></div>

        <div className="row">

          <div className="col-sm-4 port-item margin-bottom">
            <a href="#">
              <div className="item-img-wrap">
                <img src="images/work-1.jpg" className="img-responsive" alt="workimg" />
              </div>
            </a>
            <div className="work-desc">
              <h3><a href="#">Mockup Design</a></h3>
            </div>
          </div>

          <div className="col-sm-4 port-item margin-bottom">
            <a href="#">
              <div className="item-img-wrap">
                <img src="images/work-2.jpg" className="img-responsive" alt="workimg" />
              </div>
            </a>
            <div className="work-desc">
              <h3><a href="#">Graphic Design</a></h3>
            </div>

          </div>

          <div className="col-sm-4 port-item margin-bottom">
            <a href="#">
              <div className="item-img-wrap">
                <img src="images/work-3.jpg" className="img-responsive" alt="workimg" />
              </div>
            </a>
            <div className="work-desc">
              <h3><a href="#">Web Design</a></h3>
            </div>
          </div>
          
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <a href="#" className="btn btn-custom theme_background_color">Load More</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;