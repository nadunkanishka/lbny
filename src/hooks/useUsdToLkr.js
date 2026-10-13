import { useEffect, useState } from 'react';

const KEY = 'lb-usd-lkr';
const DAY = 24 * 60 * 60 * 1000;
const FALLBACK_RATE = 300; // ponytail: used only when the rate API is unreachable and nothing is cached

const readCache = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY));
  } catch {
    return null;
  }
};

/**
 * USD -> LKR rate, refreshed at most once a day (open.er-api.com updates its rates daily).
 * Returns { rate, live }: `live` is false while the fallback rate is showing.
 */
export function useUsdToLkr() {
  const cached = readCache();
  const [state, setState] = useState({ rate: cached?.rate ?? FALLBACK_RATE, live: Boolean(cached) });

  useEffect(() => {
    if (cached && Date.now() - cached.ts < DAY) return undefined;
    const ctrl = new AbortController();
    fetch('https://open.er-api.com/v6/latest/USD', { signal: ctrl.signal })
      .then((r) => r.json())
      .then((d) => {
        const rate = d?.rates?.LKR;
        if (!rate) return;
        setState({ rate, live: true });
        try {
          localStorage.setItem(KEY, JSON.stringify({ rate, ts: Date.now() }));
        } catch {
          /* storage unavailable: just skip caching */
        }
      })
      .catch(() => {});
    return () => ctrl.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}

/** Display a USD amount in the chosen currency; LKR is rounded to the nearest Rs 500. */
export const formatPrice = (usd, currency, rate) =>
  currency === 'LKR' ? `Rs ${(Math.round((usd * rate) / 500) * 500).toLocaleString('en-US')}` : `$${usd}`;
