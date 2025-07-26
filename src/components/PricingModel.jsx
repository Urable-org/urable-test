import React from 'react';

const PricingModel = () => {
  return (
    <section className="pricing-model">
      <h2>Pricing Plans</h2>
      <div className="plan">
        <h3>Basic</h3>
        <p>$10/month</p>
        <ul>
          <li>Real-time Analysis</li>
          <li>Basic Audit</li>
        </ul>
      </div>
      <div className="plan">
        <h3>Pro</h3>
        <p>$50/month</p>
        <ul>
          <li>Real-time Analysis</li>
          <li>Advanced Audit</li>
          <li>Optimization</li>
        </ul>
      </div>
      <div className="plan">
        <h3>Enterprise</h3>
        <p>Contact Us</p>
        <ul>
          <li>Real-time Analysis</li>
          <li>Advanced Audit</li>
          <li>Optimization</li>
          <li>Custom Solutions</li>
        </ul>
      </div>
    </section>
  );
};

export default PricingModel;