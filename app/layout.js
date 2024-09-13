import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white relative">
        <Header />
        {children}
        <Footer />
        <a
          href="https://wa.me/03144058071" // Replace with your WhatsApp number
          className="fixed bottom-10 right-2  shadow-green-400  bg-green-500 text-white rounded-full flex items-center justify-center shadow-sm z-10 hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" // Ensure this image is in your public directory
            alt="WhatsApp"
            className="w-16 sm:w-12 p-1 "
          />
        </a>
      </body>
    </html>
  )
}
