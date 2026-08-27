import React, { useRef, useState, useEffect } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    stars: 5,
    quote: '"Studio Liberny transformed our brand identity entirely. Their ability to combine strategy with stunning visuals is unmatched. Truly a game changer for us."',
    name: 'Mia Nguyen',
    role: 'Creative Director',
    initials: 'MN',
    color: '#753BBD',
  },
  {
    stars: 5,
    quote: '"The design systems they built for us saved countless hours. Our team is more aligned and our product looks incredibly polished now."',
    name: 'Carlos Diaz',
    role: 'Operations Manager',
    initials: 'CD',
    color: '#753BBD',
  },
  {
    stars: 5,
    quote: '"Working with Studio Liberny felt effortless. Deadlines met, feedback incorporated instantly, and the final result exceeded our expectations."',
    name: 'Liam Johnson',
    role: 'Team Lead',
    initials: 'LJ',
    color: '#753BBD',
  },
  {
    stars: 5,
    quote: '"Since switching to Studio Liberny, our conversion rate jumped 40%. Their understanding of user psychology and design is extraordinary."',
    name: 'Sophia Carter',
    role: 'Project Manager',
    initials: 'SC',
    color: '#753BBD',
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial-stars" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#753BBD">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-bg-aura" />

      <div className="testimonials-inner">
        <div className={`testimonials-topline ${visible ? 'is-visible' : ''}`}>
          <h2 className="testimonials-title">Testimonials.</h2>
          <span className="testimonials-kicker">// PROCESS</span>
        </div>

        <div className="testimonials-scroll-wrapper">
          {/* Fade masks */}
          <div className="testimonials-fade-left" />
          <div className="testimonials-fade-right" />

          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <article key={i} className="testimonial-card">
                <Stars count={t.stars} />
                <blockquote className="testimonial-quote">{t.quote}</blockquote>
                <div className="testimonial-author">
                  <div
                    className="testimonial-avatar"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
