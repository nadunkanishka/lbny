import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './TestimonialSection.css';

const testimonials = [
  {
    company: 'Zeal by Roche',
    quote: 'The website they built for us wasn’t just beautiful - it actually performs. We saw a 20% increase in orders within the first month, and the feedback from our customers has been amazing.',
    author: 'Nivanka Roche - Founder'
  },
  {
    company: 'Priya Products',
    quote: 'They completely nailed our branding - from the visual identity to the tone of voice. Since launch, we’ve seen a clear uptick in client engagement and have gotten compliments on our new look almost daily.',
    author: 'Priyangi Kariawasam - Managing Director'
  },
  {
    company: 'Hummingbirds Learning Center',
    quote: 'Working with this team felt like adding a full creative department to our company overnight. They’re fast, responsive, and ridiculously talented - honestly one of the smoothest collaborations we’ve had.',
    author: 'Sunil Kariawasam'
  },
  {
    company: 'Tea Select',
    quote: 'Every part of the process felt effortless. The communication was clear, the design thinking was sharp, and the final result exceeded expectations in every way. We felt like we were in good hands throughout.',
    author: 'Amitha Wijesekera - Managing Director '
  }
];

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sectionRef, sectionVisible] = useScrollReveal(0.1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { company, quote, author } = testimonials[currentIndex];

  return (
    <section className="testimonial-section" ref={sectionRef}>
      <div className="testimonial-section__inner">
        <h2 className={`testimonial-section__title reveal reveal--left ${sectionVisible ? 'is-visible' : ''}`}>
          In their<br />own words.
        </h2>

        <div className={`testimonial-section__slider reveal reveal--scale reveal-d2 ${sectionVisible ? 'is-visible' : ''}`}>

          <button className="testimonial-section__btn testimonial-section__btn--prev" onClick={handlePrev} aria-label="Previous testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          </button>

          <React.Fragment key={currentIndex}>
            <div className="testimonial-card">
              <h3 className="testimonial-card__company">{company}</h3>
              <div className="testimonial-card__body">
                <div className="testimonial-card__quote-mark">“</div>
                <p className="testimonial-card__text">{quote}</p>
              </div>
              <p className="testimonial-card__author">{author}</p>
            </div>
          </React.Fragment>

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
