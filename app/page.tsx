import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute top-8 left-8 z-10">
          <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-light tracking-tight">
                SIGNATURE TOUCH
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Our signature design meets elegance.
                Crafted for modern living spaces.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded"></div>
              </div>
              <div>
                <p className="font-medium">Premium Materials</p>
                <p className="text-sm text-gray-500">Stainless steel construction</p>
              </div>
            </div>
            
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Learn more →
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute top-4 right-4 text-sm text-gray-500">
              OF WATER WORKS
            </div>
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="w-80 h-80 relative">
                {/* Stylized faucet illustration */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-600 rounded-full transform rotate-12"></div>
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-gray-400 to-gray-700 rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-32 bg-gradient-to-r from-gray-500 to-gray-800 rounded-full transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scrolling text */}
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-4 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="text-lg font-light mx-8">WATER WORKS • WATER WORKS • WATER WORKS • WATER WORKS • WATER WORKS • </span>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="w-32 h-48 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg transform -rotate-12"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-500">Complete ↗</h2>
                <h2 className="text-sm font-medium text-gray-500">Durable Finish ↗</h2>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-4xl font-light">
                  At Waterworks, our commitment to excellence is rooted in a deep understanding that
                </h3>
                <p className="text-xl text-gray-400 font-light">
                  drives effective plumbing solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every fixture in our collection represents a perfect blend of form and function. 
                  Our design philosophy centers on creating products that not only meet the highest 
                  standards of performance but also elevate the aesthetic of any space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-light">
                Where Innovation Meets<br />
                Water Management
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gray-900 rounded-lg"></div>
                <div className="aspect-square bg-gray-700 rounded-lg"></div>
                <div className="aspect-square bg-gray-500 rounded-lg"></div>
              </div>
              
              <button className="text-black underline hover:no-underline transition-all">
                Learn more →
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                <div className="w-40 h-24 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-6xl font-light">90%</div>
              <div className="text-gray-400">Innovation</div>
              <div className="w-20 h-20 bg-gray-800 rounded-lg mx-auto"></div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-6xl font-light">100%</div>
              <div className="text-gray-400">Quality</div>
              <div className="w-20 h-20 bg-gray-800 rounded-lg mx-auto"></div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-6xl font-light">80+</div>
              <div className="text-gray-400">Sources</div>
              <div className="w-20 h-20 bg-gray-800 rounded-lg mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-light">Top Pick Product</h2>
            <p className="text-gray-600">Discover our top-rated fixtures of quality & innovation</p>
            
            <div className="flex items-center justify-center space-x-8">
              <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
                ←
              </button>
              
              <div className="bg-gray-50 rounded-2xl p-8 w-80">
                <div className="w-full h-60 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-light mb-2">Finot Easton</h3>
                <p className="text-gray-600 mb-4">Exceptional design meets superior functionality in this premium collection piece.</p>
                <button className="text-black underline hover:no-underline">
                  Learn more →
                </button>
              </div>
              
              <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-2">Water Works</h2>
                <div className="text-4xl font-light">300 +</div>
                <div className="text-gray-600">Projects</div>
              </div>
              
              <div>
                <div className="text-4xl font-light">10 +</div>
                <div className="text-gray-600">Design types</div>
              </div>
              
              <div className="bg-black text-white p-8 rounded-2xl">
                <h3 className="text-xl mb-4">Our Service</h3>
                <p className="text-gray-300 mb-6">Professional installation and maintenance services for all our premium fixtures.</p>
                <div className="text-4xl font-light">60%</div>
                <div className="text-gray-400">Efficiency increase</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-4">Waste Management</h2>
                <p className="text-gray-600">Sustainable solutions for modern water systems. Our eco-friendly approach ensures optimal performance while minimizing environmental impact.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-full h-60 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Hero */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center space-y-8">
            <div className="text-sm text-gray-500 mb-4">SINCE</div>
            <h1 className="text-8xl lg:text-9xl font-light tracking-tight">
              VERSATILE
            </h1>
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              <div className="w-32 h-2 bg-black transform rotate-45"></div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-light">
                Waterworks your trusted<br />
                partner in plumbing excellence
              </h2>
            </div>
            
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="font-medium mb-4">INFORMATION</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>ABOUT</li>
                  <li>BLOG</li>
                  <li>NEWS</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">SHIPPING</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>POLICY</li>
                  <li>RETURNS</li>
                  <li>SUPPORT</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">CONNECT</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>CONTACT</li>
                  <li>SOCIAL</li>
                  <li>CAREERS</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
            <div>© 2024 WATERWORKS. ALL RIGHTS RESERVED.</div>
            <div>PRIVACY</div>
          </div>
        </div>
      </section>
    </div>
  );
}