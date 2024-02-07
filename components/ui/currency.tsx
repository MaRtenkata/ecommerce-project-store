'use client';

import { formatPrice } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface CurrencyProps {
  value: string;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className='font-semibold'>{formatPrice(Number(value))}</div>;
};

export default Currency;
