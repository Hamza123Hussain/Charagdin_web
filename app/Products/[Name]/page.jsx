'use client'
import SingleProduct from '@/components/SingleProduct'
import * as React from 'react'

export default function MediaCard({ params }) {
  return (
    <div className=" p-10 bg-white">
      {' '}
      {/* <h1 className=" text-center text-6xl"> Sofa are here</h1> */}
      <div className=" grid grid-cols-1 sm:grid-cols-4 mx-auto gap-5">
        <SingleProduct /> <SingleProduct /> <SingleProduct /> <SingleProduct />{' '}
        <SingleProduct />
      </div>
    </div>
  )
}
