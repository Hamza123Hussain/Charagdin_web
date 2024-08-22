'use client'
import Image from 'next/image'
import SOFA from '../public/SOFA.jpg'
import { useRouter } from 'next/navigation'
export default function CategoryCard({ element }) {
  const Router = useRouter()

  return (
    //dark:bg-gray-800 dark:border-gray-700
    <div className="w-[70vw] sm:w-[30vw] mx-auto rounded-lg flex flex-col justify-center items-center  bg-white border border-gray-200  hover:shadow-slate-500  shadow-md ">
      <Image
        onClick={() => Router.push(`/Products/${element.Name}`)}
        className="rounded-t-lg bg-transparent"
        src={element.imageUrl}
        width={150}
        height={150}
        alt={element.Name}
      />

      <div className=" p-1">
        <h3 className="text-2xl uppercase font-bold tracking-tight text-slate-700 dark:text-black">
          {element.Name}
        </h3>
      </div>
    </div>
  )
}
