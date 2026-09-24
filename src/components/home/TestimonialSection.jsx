import React, { useState } from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    company: 'Zeal by Roche',
    quote: 'We work closely with founders and teams who care about the details. Every collaboration begins with listening, then making something useful and distinct together. We work closely with founders and teams who care about the details.',
    author: 'Nivanka Roche – Founder'
  },
  {
    company: 'NextGen Tech',
    quote: 'The team delivered beyond our expectations. Their strategic approach to our brand overhaul completely changed how we connect with our audience.',
    author: 'Alex Mercer – CEO'
  },
  {
    company: 'Lumina Studio',
    quote: 'Beautiful execution and crystal clear communication throughout the entire process. Our digital presence has never looked this sharp.',
    author: 'Sarah Chen – Creative Director'
  }
];

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { company, quote, author } = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-section__inner">
        <h2 className="testimonial-section__title">
          In their<br />own words.
        </h2>

        <div className="testimonial-section__slider">
          
          <button className="testimonial-section__btn testimonial-section__btn--prev" onClick={handlePrev} aria-label="Previous testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          </button>

          <div className="testimonial-card">
            <h3 className="testimonial-card__company">{company}</h3>
            <div className="testimonial-card__quote-mark">“</div>
            <p className="testimonial-card__text">{quote}</p>
            <p className="testimonial-card__author">{author}</p>
          </div>

          <button className="testimonial-section__btn testimonial-section__btn--next" onClick={handleNext} aria-label="Next testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
