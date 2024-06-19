import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin']
});

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: '400'
});

// E com esta configuração, nós estamos importando a fonte Inter do Google Fonts, que é uma fonte que nós vamos utilizar