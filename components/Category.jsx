'use client'
export default function CategoryCard({ element }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
      <img
        src={element.imageUrl}
        alt={element.Name}
        className="h-96 w-72   sm:w-96"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {element.Name}
        </h2>
      </div>
    </div>
  )
}
