"use client"

import { useState } from 'react'
import Image from 'next/image'
import PaymentModal from './PaymentModal'
import SuccessModal from './SuccessModal'

interface CheckoutModalProps {
    isOpen: boolean
    onClose: () => void
    product: {
        id: number
        name: string
        price: number
        image: string
    }
}

export default function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  if (!isOpen) return null

  const total = product.price * quantity

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Checkout</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Product Info */}
                <div className="flex items-center mb-4">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                    />
                    <div className="ml-4">
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity
                    </label>
                    <div className="flex items-center">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="p-2 border rounded-l hover:bg-gray-100"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            className="p-2 w-20 border-t border-b text-center"
                        />
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="p-2 border rounded-r hover:bg-gray-100"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Summary */}
                <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>$5.00</span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${(total + 5).toFixed(2)}</span>
                    </div>
                </div>

                {/* Checkout Button */}
                <button
                    onClick={() => setIsPaymentModalOpen(true)}
                    className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors font-semibold"
                >
                    Proceed to Payment
                </button>
            </div>
        </div>

        <PaymentModal
            isOpen={isPaymentModalOpen}
            onClose={() => setIsPaymentModalOpen(false)}
            totalAmount={total + 5}
            onPaymentComplete={() => {
            setIsPaymentModalOpen(false)
            setIsSuccessModalOpen(true)
            }}
        />
        <SuccessModal
            isOpen={isSuccessModalOpen}
            onClose={() => {
            setIsSuccessModalOpen(false)
            onClose()
            }}
        />

    </div>
  )
}