'use client'
import Image from 'next/image'
import SOFA from '../public/SOFA.jpg'
import { useRouter } from 'next/navigation'
export default function CategoryCard() {
  const Router = useRouter()
  return (
    //dark:bg-gray-800 dark:border-gray-700
    <div className="w-full rounded-lg flex flex-col justify-center items-center  bg-white border border-gray-200  hover:shadow-slate-500  shadow-md ">
      <Image
        onClick={() => Router.push('/Products/sofa')}
        className="rounded-t-lg"
        src={SOFA}
        width={400}
        height={225}
      />

      <div className=" p-1">
        <h3 className="text-2xl uppercase font-bold tracking-tight text-slate-700 dark:text-white">
          Sofa
        </h3>
      </div>
    </div>
  )
}
