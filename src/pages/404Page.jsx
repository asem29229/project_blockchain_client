import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page404() 
{
    return (
        <div className="container">
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
              <h1 className="display-1 fw-bold">404</h1>
              <p className="fs-3">
                <span className="text-danger">Oops!</span> Page not found.
              </p>
              <p className="lead">
                The page you’re looking for doesn’t exist.
              </p>
              <a href="/" className="btn btn-primary">Go Home</a>
            </div>
          </div>
        </div>
      );
    }


      