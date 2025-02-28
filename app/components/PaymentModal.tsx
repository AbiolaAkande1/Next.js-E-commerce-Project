"use client"

import { useState } from 'react'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  totalAmount: number
  onPaymentComplete: () => void
}

interface ValidationErrors {
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
    name?: string;
}

export default function PaymentModal({ isOpen, onClose, totalAmount, onPaymentComplete }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [name, setName] = useState('')
  const [errors, setErrors] = useState<ValidationErrors>({})

  if (!isOpen) return null

    const validateCardNumber = (value: string) => {
        const numbersOnly = value.replace(/\s/g, '')
        if (!/^\d*$/.test(numbersOnly)) {
        return 'Card number must contain only numbers'
        }
        if (numbersOnly.length < 16) {
        return 'Card number must be 16 digits'
        }
        return ''
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onPaymentComplete()
    }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Payment Details</h2>
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

                <form onSubmit={handleSubmit}>
                    {/* Payment Method Selection */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Payment Method
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                className={`p-3 border rounded-md flex items-center justify-center ${
                                    paymentMethod === 'credit' ? 'border-purple-600 bg-purple-50' : ''
                                }`}
                                onClick={() => setPaymentMethod('credit')}
                                >
                                <span>Credit Card</span>
                            </button>
                            <button
                                type="button"
                                className={`p-3 border rounded-md flex items-center justify-center ${
                                    paymentMethod === 'debit' ? 'border-purple-600 bg-purple-50' : ''
                                }`}
                                onClick={() => setPaymentMethod('debit')}
                                >
                                <span>Debit Card</span>
                            </button>
                        </div>
                    </div>

                    {/* Card Details */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Cardholder Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 border rounded-md"
                                placeholder="Steph Akinola"
                                required
                            />
                        </div>
                    
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Card Number
                            </label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="w-full p-2 border rounded-md"
                                placeholder="1234 5678 9012 3456"
                                maxLength={19}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="MM/YY"
                                    maxLength={5}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="123"
                                    maxLength={3}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Total Amount */}
                    <div className="mt-6 mb-6">
                        <div className="bg-gray-50 p-4 rounded-md">
                            <div className="flex justify-between items-center">
                            <span className="font-medium">Total Amount:</span>
                            <span className="text-xl font-bold text-purple-600">
                                ${totalAmount.toFixed(2)}
                            </span>
                            </div>
                        </div>
                    </div>

                    {/* Pay Button */}
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors font-semibold"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}