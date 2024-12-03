import React from 'react';

const BuyerInfo = () => (
  <section className="buyer">
    <iframe
      width="640PX"
      height="350PX"
      src="https://www.youtube.com/embed/IZLp-TZyDkQ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <div>
      <div className="d-flex justify-content-around mb-4 fs-3">
        <span>Buyer</span>
        <span>Supplier</span>
      </div>
      <div><span className="bi bi-check-circle-fill text-success"></span> Post your requirements.</div>
      <div><span className="bi bi-check-circle-fill text-success"></span> Sit back for multiple suppliers to contact you.</div>
      <div><span className="bi bi-check-circle-fill text-success"></span> Choose among the suppliers based on ratings.</div>
    </div>
  </section>
);

export default BuyerInfo;
