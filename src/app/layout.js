import { Montserrat } from 'next/font/google'
import './globals.scss'

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
        <main className="main-page">{children}</main>
      </body>
    </html>
  )
}
