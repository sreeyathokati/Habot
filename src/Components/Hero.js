import React from 'react';

const Hero = () => (
  <section className="hero bg-primary text-white text-center">
    <div className="container">
      <h1 style={{ fontSize: '55px', fontWeight: 'bold', marginBottom: '70px' }}>
        Are You a Supplier? <br />
        Explore Matching Opportunities.
      </h1>
      <div className="row justify-content-center my-4 align-items-center">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Search your required service here" />
        </div>
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Search your desired location here" />
        </div>
        <div className="col-md-2">
          <button className="btn btn-success w-100">Search</button>
        </div>
      </div>
      <a href="#buyer" className="text-white mt-4 pt-4">Are you a buyer? Click here to post a requirement</a>
    </div>
  </section>
);

export default Hero;
