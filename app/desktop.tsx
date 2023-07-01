'use client';
import { ReactNode, useEffect, useState } from 'react';

export function Desktop({ children }: { children: ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    function handleChange({ matches }: MediaQueryListEvent) {
      setIsDesktop(matches);
    }
    window.matchMedia('(min-width: 1280px)').addEventListener('change', handleChange);

    () => {
      window.matchMedia('(min-width: 1280px)').removeEventListener('change', handleChange);
    };
  }, [isDesktop]);

  return isDesktop ? children : null;
}
