import React, { useState } from 'react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is NeuroChain AI?",
      answer: "NeuroChain AI is a Web3-native AI platform that uses machine learning to analyze, audit, and optimize smart contracts in real time."
    },
    {
      question: "How does NeuroChain AI work?",
      answer: "NeuroChain AI uses advanced machine learning algorithms to analyze smart contracts and provide real-time insights and recommendations."
    }
  ];

  return (
    <section className="faq-accordion">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQAccordion;