import Image from 'next/image'
import SOFA from '../public/SOFA.jpg'
export default function CategoryCard() {
  return (
    //dark:bg-gray-800 dark:border-gray-700
    <div className="w-fit rounded-lg flex flex-col justify-center items-center  bg-white border border-gray-200  hover:shadow-slate-500  shadow-md ">
      <a href="#">
        <Image className="rounded-t-lg" src={SOFA} width={400} height={225} />
      </a>
      <div className=" p-1">
        <h3 className="text-2xl uppercase font-bold tracking-tight text-slate-700 dark:text-white">
          Sofa
        </h3>
      </div>
    </div>
  )
}
