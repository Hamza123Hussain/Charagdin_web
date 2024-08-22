import axios from 'axios'

export const fetchProductsByCategory = async (category: string) => {
  try {
    const response = await axios.get(
      `https://charag-din-backend.vercel.app/api/Product/CatogoryProducts?UserEmail=user@example.com&category=${category}`
    )
    console.log('API HAS RESPONDED', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching products by category:', error)
    throw error
  }
}
