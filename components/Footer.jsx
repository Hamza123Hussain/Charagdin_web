import Image from 'next/image'
import LOGO from '../public/LOGO-removebg-preview.png'
export default function Footer() {
  return (
    <footer className="bg-gray-300 brightness-125 border-t-2 border-slate-400 shadow w-full dark:bg-gray-900 ">
      <div className="flex items-center justify-between py-1    dark:border-gray-700">
        <a href="/" className="flex items-center ">
          <Image src={LOGO} className=" w-12 rounded-lg " alt="Flowbite Logo" />
          <span className="self-center text-lg text-slate-900 font-light whitespace-nowrap dark:text-white">
            Charagdin
          </span>
        </a>
        <ul className="flex flex-wrap gap-5 items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#">
              <h1 className=" text-lg">Follow us : </h1>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/charagdin_co/"
              className="hover:underline "
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
                className=" w-7"
                alt=""
                srcset=""
              />
            </a>
          </li>
          <li>
            {' '}
            <a
              href="https://www.facebook.com/CharagDinFurniture/"
              className="hover:underline"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
                className=" w-12"
                alt=""
                srcset=""
              />
            </a>
          </li>
        </ul>
      </div>

      <span className="   text-xs sm:text-sm   block text-center   text-gray-500 sm:text-center dark:text-gray-400">
        © 2024 Charagdin™ . All Rights Reserved.
      </span>
    </footer>
  )
}
