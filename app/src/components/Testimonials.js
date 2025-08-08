import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-list">
        <div className="testimonial">
          <p>"Urable has completely transformed our development workflow. We're able to focus on what we do best while Urable handles the rest."</p>
          <p className="author">- John Doe, CTO at TechCorp</p>
        </div>
        <div className="testimonial">
          <p>"The automation features of Urable have saved us countless hours. It's a game-changer for our team."</p>
          <p className="author">- Jane Smith, Lead Developer at DevSolutions</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;