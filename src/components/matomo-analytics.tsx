'use client';
import { init, push } from '@socialgouv/matomo-next';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

// const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
// const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;
// const MATOMO_URL = 'https://universalperk.mastomo.cloud2';
const MATOMO_URL = 'https://universalperk.matomo.cloud';
const MATOMO_SITE_ID = '3';

const MatomoComponent = () => {
  const [initialised, setInitialised] = useState(false);
  useEffect(() => {
    if (MATOMO_URL && MATOMO_SITE_ID && !initialised) {
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
    }
    return () => {
      setInitialised(true);
    };
  }, [initialised, setInitialised]);

  const searchParams = useSearchParams(),
    pathname = usePathname();

  const searchParamsString = searchParams.toString();
  useEffect(() => {
    if (!pathname) return;

    const url = pathname + (searchParamsString ? '?' + searchParamsString : '');
    push(['setCustomUrl', url]);
    push(['trackPageView']);
  }, [pathname, searchParamsString]);
  return null;
};

export default function Matomo() {
  return (
    <Suspense>
      <MatomoComponent />
    </Suspense>
  );
}
