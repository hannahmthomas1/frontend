import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <>
      <div className="border-bottom">
        <br />
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <h5 className="align-top text-muted">Joel Hilton</h5>
          </div>
          <div className="col-1">
            <a
              href="/"
              className="text-muted text-decoration-none link-dark align-middle"
            >
              Home
            </a>
          </div>
          <div className="col-1">
            {/* <link to="/" className="text-decoration-none link-dark align-middle">
                Home
            </link> */}
            <a
              href="/podcast"
              className="text-muted text-decoration-none link-dark align-middle"
            >
              Podcast
            </a>
          </div>
          <div className="col-1">
            <a
              href="/movies"
              className="text-muted text-decoration-none link-dark align-middle"
            >
              Collection
            </a>
          </div>
          <div className="col-1"></div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Navigation;
