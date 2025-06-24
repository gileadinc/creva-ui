import localFont from 'next/font/local';

export const openSans = localFont({
  src: [
    {
      path: './OpenSans-VariableFont_wdth,wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './OpenSans-Italic-VariableFont_wdth,wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-open-sans',
  display: 'swap',
});

export const raleway = localFont({
  src: [
    {
      path: './Raleway-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './Raleway-Italic-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-raleway',
  display: 'swap',
});

export const roboto = localFont({
  src: [
    {
      path: './Roboto-VariableFont_wdth,wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './Roboto-Italic-VariableFont_wdth,wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-roboto',
  display: 'swap',
});
