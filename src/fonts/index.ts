import localFont from 'next/font/local';

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

export const roboto = localFont({
  src: [
    {
      path: './Roboto-VariableFont_wdth,wght.ttf',
      style: 'normal',
    },
    {
      path: './Roboto-Italic-VariableFont_wdth,wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-roboto',
  display: 'swap',
});
