import localFont from 'next/font/local';

export const montserrat = localFont({
  src: [
    {
      path: './Montserrat-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './Montserrat-Italic-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-montserrat',
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

export const jost = localFont({
  src: [
    {
      path: './Jost-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './Jost-Italic-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-jost',
  display: 'swap',
});

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

export const nunito = localFont({
  src: [
    {
      path: './Nunito-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: './Nunito-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-nunito',
  display: 'swap',
});
