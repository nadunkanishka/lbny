import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Motion.css';

/** Fade/slide in once when scrolled into view (uses the shared .reveal classes). */
export const Reveal = ({ as: Tag = 'div', variant = '', delay = 0, className = '', children, ...rest }) => {
  const [ref, visible] = useScrollReveal(0.15);
  const cls = [
    'reveal',
    variant && `reveal--${variant}`,
    delay > 0 && `reveal-d${delay}`,
    visible && 'is-visible',
    className,
  ].filter(Boolean).join(' ');
  return <Tag ref={ref} className={cls} {...rest}>{children}</Tag>;
};

/** Headline whose lines rise out of a mask, one after another. */
export const MaskLines = ({ as: Tag = 'h2', className = '', lines }) => {
  const [ref, visible] = useScrollReveal(0.3);
  return (
    <Tag ref={ref} className={`lb-mask-heading ${visible ? 'is-visible' : ''} ${className}`}>
      {lines.map((line, i) => (
        <span className="lb-mask" key={i}>
          <span className="lb-mask__inner" style={{ transitionDelay: `${i * 90}ms` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
};
