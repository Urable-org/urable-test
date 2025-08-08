import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="feature-list">
        <div className="feature">
          <h3>Automated PR Generation</h3>
          <p>Urable automatically generates GitHub pull requests based on Jira tasks.</p>
        </div>
        <div className="feature">
          <h3>Workflow Automation</h3>
          <p>Automate your development workflow with Urable's powerful automation features.</p>
        </div>
        <div className="feature">
          <h3>Real-time Updates</h3>
          <p>Get real-time updates on your development progress and PR status.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;