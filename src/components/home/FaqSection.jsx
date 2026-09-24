import React, { useState } from 'react';
import './FaqSection.css';

const faqs = [
  {
    question: 'What can Studio Liberny help with?',
    answer: 'We specialize in brand identity, creative strategy, and web design & development to elevate your digital presence.',
  },
  {
    question: 'Can you handle both brand and website?',
    answer: 'Yes, we provide end-to-end services, ensuring your brand identity seamlessly translates into a high-performing digital experience.',
  },
  {
    question: 'How does a project start?',
    answer: 'Every project begins with a discovery phase where we listen to your goals, understand your audience, and align on a strategic direction.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Timelines vary based on scope, but a typical engagement ranges from 4 to 8 weeks from kickoff to launch.',
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-section__inner">
        
        {/* Left Column: Title & Intro */}
        <div className="faq-section__header">
          <h2 className="faq-section__title">
            <span className="faq-section__title-line">Before we</span>
            <span className="faq-section__title-line faq-section__title-accent">begin.</span>
          </h2>
          <p className="faq-section__intro">
            A few useful answers about working together.
          </p>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="faq-section__list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
            >
              <button 
                className="faq-item__trigger" 
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-item__question">{faq.question}</span>
                <span className="faq-item__icon" aria-hidden="true"></span>
              </button>
              <div 
                className="faq-item__content"
                style={{ 
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? '1' : '0',
                }}
              >
                <div className="faq-item__answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
