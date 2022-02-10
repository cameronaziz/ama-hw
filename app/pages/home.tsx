import React, { Fragment, VFC } from 'react';

const Home: VFC = () => {
  return (
    <Fragment>
      <div id="fh5co-countdown">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center animate-box">
            <p className="countdown">
              <span id="days"></span>
              <span id="hours"></span>
              <span id="minutes"></span>
              <span id="seconds"></span>
            </p>
          </div>
        </div>
      </div>

      <div id="fh5co-started" style={{ backgroundImage: 'url(images/cover_bg_2.jpg)' }}
        data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center heading-section">
              <h2>Are You Attending?</h2>
              <p>
                Please Fill-up the form to notify you that you're attending. Thanks.
              </p>
            </div>
          </div>
          <div className="row animate-box">
            <div className="col-md-10 col-md-offset-1">
              <form className="form-inline">
                <div className="col-md-4 col-sm-4">
                  <div className="form-group">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="name" className="form-control" id="name" placeholder="Name" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <button type="submit" className="btn btn-primary btn-block">I am
                    Attending</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Jack &amp; Rose</h2>
              </div>
              <div className="col-md-6 col-md-offset-3 text-center">
                <p className="fh5co-social-icons">
                  <a href="#"><i className="icon-twitter2"></i></a>
                  <a href="#"><i className="icon-facebook2"></i></a>
                  <a href="#"><i className="icon-instagram"></i></a>
                  <a href="#"><i className="icon-dribbble2"></i></a>
                  <a href="#"><i className="icon-youtube"></i></a>
                </p>
                <p>Copyright 2016 Free Html5 <a href="#">Module</a>. All Rights
                  Reserved. <br />Made with <i className="icon-heart3"></i> by <a
                    href="http://freehtml5.co/" target="_blank">Freehtml5.co</a> / Demo
                  Images: <a href="https://unsplash.com/" target="_blank">Unsplash</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment >
  );
};

export default Home;
