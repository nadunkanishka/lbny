import { useScrollReveal } from '@/hooks/useScrollReveal';

export const ProcessRow = ({ item, index }) => {
  const [ref, visible] = useScrollReveal(0.35);
  return (
    <li ref={ref} className={`ab-process__row ${visible ? 'is-visible' : ''}`} style={{ '--i': index }}>
      <span className="ab-process__num">{item.n}</span>
      <h3 className="ab-process__name">{item.title}</h3>
      <p className="ab-process__text">{item.text}</p>
    </li>
  );
};

export default ProcessRow;
