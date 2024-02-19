import type { Metadata } from 'next';
import '@styles/globals.css';
import Nav from '@/components/Nav';
import Provider from '@components/Provider';

export const metadata: Metadata = {
  title: 'PromptLand',
  description: 'Generate and share AI Prompts with hundrads of templates',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <div className="app">
            <Nav />
            <main>{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
