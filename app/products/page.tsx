"use client";

import { useState } from 'react'
import Link from 'next/link'
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
    const [products] = useState([
        { 
            id: 1, 
            name: "Premium Headphones", 
            price: 199.99, 
            category:"Electronics",
            rating: 4.5,
            stock: 15,
            description: "High-quality wireless headphones with noise cancellation.",
            image: "https://picsum.photos/300/300"
        },
        { 
            id: 2, 
            name: "Smart Watch", 
            price: 299.99, 
            category: "Electronics",
            rating: 4.8,
            stock: 10,
            description: "Feature-rich smartwatch with health tracking.",
            image: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
        },
        { 
            id: 3, 
            name: "Running Shoes", 
            price: 89.99, 
            category: "Sports",
            rating: 4.3,
            stock: 25,
            description: "Comfortable running shoes for daily use.",
            image: "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4"
        },
        { 
            id: 4, 
            name: "Yoga Mat", 
            price: 29.99, 
            category: "Sports",
            rating: 4.6,
            stock: 0,
            description: "Premium yoga mat with carrying strap.",
            image: "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g"
        },
        { 
            id: 5, 
            name: "Coffee Maker", 
            price: 79.99, 
            category: "Home",
            rating: 4.7,
            stock: 20,
            description: "Programmable coffee maker with timer.",
            image: "https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA"
        },
        { 
            id: 6, 
            name: "Bread Maker", 
            price: 79.99, 
            category: "Home",
            rating: 4.7,
            stock: 20,
            description: "Programmable coffee maker with timer.",
            image: "https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE"
        },
    ])

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')

  // Get unique categories
   const categories = ['All', ...products
    .map(product => product.category)
    .filter((category, index, array) => array.indexOf(category) === index)]

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                        Our Products
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {/* Sort dropdown */}
                        <select
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="name">Sort by Name</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>
                </div>

                {/* Categories and Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Categories Sidebar */}
                    <div className="md:col-span-1">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-lg font-semibold mb-4">Categories</h2>
                            <ul className="space-y-2">
                                {categories.map(category => (
                                <li key={category}>
                                    <button
                                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                                            selectedCategory === category
                                            ? 'bg-purple-100 text-purple-700'
                                            : 'hover:bg-gray-100'
                                        }`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="md:col-span-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* No results message */}
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">
                                    No products found. Try adjusting your filters.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
    )
}