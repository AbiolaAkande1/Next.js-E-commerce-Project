"use client";

import React from 'react'
import AddToCart from './AddToCart';
import { useState } from 'react'
import Image from 'next/image';
import CheckoutModal from './CheckoutModal';

interface Product {
    id: number
    name: string
    price: number
    category: string
    rating: number
    stock: number
    description: string
    image: string

}

interface ProductCardProps {
    product: Product
    showDescription?: boolean
}

export default function ProductCard({product, showDescription = true}: ProductCardProps){

    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false)

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <Image 
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                {showDescription && (
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                )}
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-purple-600">
                        ${product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-gray-600">{product.rating}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className={`text-sm ${
                        product.stock > 0 ? 'text-green-600' : 'text-red-600'}
                        `}>
                        {product.stock > 0 ? `${product.stock} in stock`: 'Out of stock'}
                    </span>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                     onClick={() => setIsCheckoutModalOpen(true)}
                     disabled={product.stock === 0}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
            <CheckoutModal
                isOpen={isCheckoutModalOpen}
                onClose={() => setIsCheckoutModalOpen(false)}
                product={product}
            />
        </div>
    )
}



