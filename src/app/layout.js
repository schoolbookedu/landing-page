import '../styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Schoolbook',
  description: 'The Schooling Experience Gets Better With Us',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
