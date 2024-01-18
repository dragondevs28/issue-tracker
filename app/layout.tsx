import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Container, Theme, ThemePanel} from '@radix-ui/themes';
import NavBar from "@/app/NavBar";
import AuthProvider from "@/app/auth/Provider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
      <body className={`${inter.variable}`}>
      <AuthProvider>
        <Theme appearance="dark" accentColor="iris">
          <NavBar/>
          <main className="p-5">
            <Container>{children}</Container>
          </main>
          {/*<ThemePanel/>*/}
        </Theme>
      </AuthProvider>
      </body>
      </html>
  )
}
