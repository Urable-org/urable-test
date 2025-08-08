import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>Step 1: Connect</h3>
          <p>Connect your Jira and GitHub accounts to Urable.</p>
        </div>
        <div className="step">
          <h3>Step 2: Configure</h3>
          <p>Configure your workflow settings and preferences.</p>
        </div>
        <div className="step">
          <h3>Step 3: Automate</h3>
          <p>Urable will automatically read Jira tasks and generate GitHub pull requests.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;