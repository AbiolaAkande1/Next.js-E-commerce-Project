
"use client"
import Link from 'next/link'
export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Abby Store</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're on a mission to provide high-quality products while delivering exceptional customer experiences.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Founded in 2024, Abby Store started with a simple idea: make quality products accessible to everyone. 
              What began as a small online shop has grown into a trusted destination for customers worldwide.
            </p>
          </div>
        </div>
      </div>

        {/* Values Section */}
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Quality */}
                <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-purple-50">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-purple-200">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-600">Quality First</h3>
                    <p className="text-gray-600">
                    We never compromise on quality, ensuring every product meets our high standards.
                    </p>
                </div>

                {/* Customer Focus */}
                <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-purple-50">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-purple-200">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-600">Customer Focus</h3>
                    <p className="text-gray-600">
                    Our customers are at the heart of everything we do, driving our decisions and innovations.
                    </p>
                </div>

                {/* Innovation */}
                <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-purple-50">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-purple-200">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-600">Innovation</h3>
                    <p className="text-gray-600">
                    We continuously explore new ways to improve and bring fresh ideas to the market.
                    </p>
                </div>
                </div>
            </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="text-center group transform transition-all duration-300 hover:scale-105">
                <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-200 group-hover:shadow-lg">
                    <span className="text-purple-600 text-2xl font-bold transition-colors duration-300 group-hover:text-purple-700">AA</span>
                </div>
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-purple-600">Abby Akinola</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-purple-500">Founder & CEO</p>
                </div>

                {/* Team Member 2 */}
                <div className="text-center group transform transition-all duration-300 hover:scale-105">
                <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-200 group-hover:shadow-lg">
                    <span className="text-purple-600 text-2xl font-bold transition-colors duration-300 group-hover:text-purple-700">SA</span>
                </div>
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-purple-600">Stephen Akinola</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-purple-500">Co Founder</p>
                </div>

                {/* Team Member 3 */}
                <div className="text-center group transform transition-all duration-300 hover:scale-105">
                <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-200 group-hover:shadow-lg">
                    <span className="text-purple-600 text-2xl font-bold transition-colors duration-300 group-hover:text-purple-700">BS</span>
                </div>
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-purple-600">Bukola Sokunbi</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-purple-500">Product Manager</p>
                </div>
            </div>
            </div>
        </div>

      {/* Contact Section */}
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                We'd love to hear from you. Contact us for any inquiries or feedback.
                </p>
                <Link 
                href="/contact" 
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
                >
                Contact Us
                </Link>
            </div>
        </div>

         {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                We're dedicated to providing the best shopping experience for our customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Email: info@example.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Store St, City, State</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Your Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}