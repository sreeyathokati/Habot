import React from 'react';

const Intro = () => (
  <section className="py-5">
    <div className="container intro d-flex">
      <div className="w-50 p-4">
        <h2 className="text-center">
          Ready to dive into <span className="text-primary">HABOT</span>?
        </h2>
        <p>Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the first
          step towards realizing your entrepreneurial dreams.</p>
        <button className="btn btn-success mb-3 w-50">Sign up Today! <span className="bi bi-arrow-right"></span></button>
      </div>
      <div className="box-btn p-3">
        {['Abu Dhabi', 'Dubai', 'Sharjah & Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'].map((city) => (
          <button className="btn-cuntry" key={city}>{city}</button>
        ))}
      </div>
    </div>
  </section>
);

export default Intro;