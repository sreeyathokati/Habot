import React from 'react';

const steps = [
  { icon: 'bi-person-fill-add', text: 'Select Your Role and Sign Up' },
  { icon: 'bi-clipboard2-check-fill', text: 'Buyers Post Your Requirements' },
  { icon: 'bi-pencil-square', text: 'Suppliers Complete Their Profiles' },
  { icon: 'bi-pencil-square', text: 'Contact and Share Quotes' },
  { icon: 'bi-pencil-square', text: 'Review, Select, and Contact' },
  { icon: 'bi-pencil-square', text: 'Both Parties Leave Feedback' },
];

const HowItWorks = () => (
  <section className="py-5">
    <div className="container text-center">
      <h2>How it works?</h2>
      <p>Buyers post their needs and review top suppliers...</p>
      <div className="work">
        {steps.map((step, index) => (
          <div key={index} className="m-3 p-4 bg-light w-75">
            <div className={`bi ${step.icon} fs-1`}></div>
            <div>{step.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
