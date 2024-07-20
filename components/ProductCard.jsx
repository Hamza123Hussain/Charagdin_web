import Image from 'next/image'
import pic from '../public/Pic.jpg'
export default function BlogCard() {
  return (
    //dark:bg-gray-800 dark:border-gray-700
    <div className="w-fit flex hover:shadow-slate-500 flex-col justify-center  bg-white border border-gray-200 rounded-lg shadow-md ">
      <a href="#">
        <Image className="rounded-t-lg" src={pic} width={400} height={225} />
      </a>
      <div className=" p-1">
        <h3 className="text-[15px] lg:text-xl font-bold tracking-tight text-slate-700 dark:text-white">
          Charagdin Product
        </h3>
        <div
          className=" flex justify-end px-2 
        "
        >
          <h3 className="text-[15px] lg:text-xl font-bold tracking-tight text-slate-700 dark:text-white">
            Rs 20000
          </h3>
        </div>
      </div>
    </div>
  )
}
