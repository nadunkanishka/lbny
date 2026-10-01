import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
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
    answer: 'Timelines vary based on scope, but a typical engagement ranges from 2 to 8 weeks from kickoff to launch.',
  },
];

const DEFAULT_INTRO = 'A few useful answers about working together.';

/**
 * FAQ accordion. Defaults to the home page content; pass `items`
 * ({ question, answer }), `titleLines` (last line is the purple accent) and `intro` to reuse it.
 */
export const FaqSection = ({
  items = faqs,
  titleLines = ['Before we', 'begin.'],
  intro = DEFAULT_INTRO,
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [sectionRef, sectionVisible] = useScrollReveal(0.1);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const delayClasses = ['reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4'];

  return (
    <section className={`faq-section ${className}`} ref={sectionRef}>
      <div className="faq-section__inner">

        {/* Left Column: Title & Intro */}
        <div className={`faq-section__header reveal reveal--left ${sectionVisible ? 'is-visible' : ''}`}>
          <h2 className="faq-section__title">
            {titleLines.map((line, i) => (
              <span
                key={line}
                className={`faq-section__title-line${i === titleLines.length - 1 ? ' faq-section__title-accent' : ''}`}
              >
                {line}
              </span>
            ))}
          </h2>
          <p className="faq-section__intro">
            {intro}
          </p>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="faq-section__list">
          {items.map((faq, index) => (
            <div
              key={index}
              className={`faq-item reveal reveal-d${index + 1} ${sectionVisible ? 'is-visible' : ''} ${openIndex === index ? 'faq-item--open' : ''}`}
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
