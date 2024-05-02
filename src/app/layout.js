import { Montserrat } from 'next/font/google'
import './globals.scss'

import { Header } from '@/components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'NewNic - Desarrollo de Software',
  description:
    'NewNic - Desarrollo de software para empresas, impulsando el éxito en el mundo digital.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />

        <main className="main-page mt-20">
          <div className="main-page-container">{children}</div>
        </main>
      </body>
    </html>
  )
}
