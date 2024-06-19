import '@/app/ui/global.css'; // Aqui nos estamos importando o arquivo de css que está na pasta ui do projeto.
import {inter, lusitana} from '@/app/ui/fonts'; // Aqui estamos importando a fonte que está na pasta ui do projeto.


/**
 * Antes de começar o projeto, esse cara vem totalmente desconfigurado, então, para que nos possamos utilizar de forma correta,
 * precisamos configurar o arquivo de layout, que é o arquivo que vai ser utilizado para renderizar o conteúdo da aplicação. 
 * Que é essa importação que estamos fazendo acima.
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
      </body>
    </html>
  );
}
