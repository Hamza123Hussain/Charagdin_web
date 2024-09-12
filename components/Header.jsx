'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import LOGO from '../public/LOGO-removebg-preview.png' // Update this with the correct path to your logo image

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="shadow-md bg-gray-50 shadow-slate-300 sticky top-0 z-30">
      <div className="flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src={LOGO}
              width={100}
              height={100}
              alt="logo"
              className="w-24 h-auto md:w-32"
            />
          </a>
        </Link>

        <div className="hidden md:flex text-2xl space-x-6 px-2 text-slate-500">
          <Link href="/" legacyBehavior>
            <a className="hover:brightness-110 bg-transparent hover:text-black">
              Home
            </a>
          </Link>
          <Link href="/Catagories" legacyBehavior>
            <a className="hover:brightness-110 bg-transparent hover:text-black">
              Catagories
            </a>
          </Link>
          {/* <Link href="/contact" legacyBehavior>
            <a className="hover:brightness-110 bg-transparent hover:text-black">
              Contact Us
            </a>
          </Link> */}
          <Link href="/About" legacyBehavior>
            <a className="hover:brightness-110 bg-transparent hover:text-black">
              About
            </a>
          </Link>
        </div>
        <div className="md:hidden px-2">
          <button onClick={toggleMenu} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white text-slate-500 flex flex-col space-y-4 p-4">
          <Link href="/" legacyBehavior>
            <a className="hover:brightness-110 bg-transparent hover:text-black">
              Home
            </a>
          </Link>
          <Link href="/Catagories" legacyBehavior>
            <a className="hover:brightness-110 bg-transparent hover:text-black">
              Catagories
            </a>
          </Link>
          {/* <Link href="/contact" legacyBehavior>
            <a className="hover:brightness-110 bg-transparent hover:text-black">
              Contact Us
            </a>
          </Link> */}
          <Link href="/About" legacyBehavior>
            <a className="hover:brightness-110 bg-transparent hover:text-black">
              About
            </a>
          </Link>
        </div>
      )}
    </nav>
  )
}
