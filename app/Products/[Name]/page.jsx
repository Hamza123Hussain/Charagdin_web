'use client'
import SingleProduct from '@/components/SingleProduct'
import * as React from 'react'

export default function MediaCard({ params }) {
  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-4 p-10 gap-5">
        <SingleProduct /> <SingleProduct /> <SingleProduct /> <SingleProduct />{' '}
        <SingleProduct />
      </div>
    </div>
  )
}
