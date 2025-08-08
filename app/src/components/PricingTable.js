import React from 'react';

const PricingTable = () => {
  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-table">
        <div className="plan">
          <h3>Free</h3>
          <p className="price">$0/month</p>
          <ul>
            <li>Basic automation features</li>
            <li>Limited PR generation</li>
            <li>Community support</li>
          </ul>
          <button className="primary">Get Started</button>
        </div>
        <div className="plan">
          <h3>Pro</h3>
          <p className="price">$19/month</p>
          <ul>
            <li>Advanced automation features</li>
            <li>Unlimited PR generation</li>
            <li>Priority support</li>
          </ul>
          <button className="primary">Get Started</button>
        </div>
        <div className="plan">
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <ul>
            <li>Custom automation workflows</li>
            <li>Dedicated support</li>
            <li>On-premise deployment</li>
          </ul>
          <button className="primary">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;