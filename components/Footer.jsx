import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import LOGO from '../public/LOGO-removebg-preview.png'
export default function Footer() {
  return (
    <footer className="bg-gray-200  shadow fixed bottom-0 w-full dark:bg-gray-900 ">
      <div className="sm:flex sm:items-center sm:justify-between p-2 border-gray-800 border-b-2   dark:border-gray-700">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img
            src={'https://hamariweb.com/profiles/images/profile/4920-834.jpg'}
            className=" w-8 sm:w-12 rounded-lg "
            alt="Flowbite Logo"
          />
          <span className="self-center text-lg sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
            Charagdin
          </span>
        </a>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <span className="   text-xs sm:text-sm   block text-center mt-2  text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 Flowbite™ . All Rights Reserved.
      </span>
    </footer>
  )
}
