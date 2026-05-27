import { useState } from 'react'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <header className='bg-blue-900 text-white p-6 text-center shadow-lg'>
        <h1 className='text-4xl font-bold'>Rohmot CSP & CSC</h1>
        <p className='mt-2'>Professional Banking & Digital Services</p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className='mt-5 bg-yellow-400 text-black px-5 py-3 rounded-2xl font-semibold'
        >
          🌙 / ☀️ Toggle Theme
        </button>
      </header>

      <section className='max-w-7xl mx-auto py-16 px-6'>
        <h2 className='text-3xl font-bold mb-10 text-center'>Our Services</h2>

        <div className='grid md:grid-cols-3 gap-6'>
          {[
            'Cash Deposit',
            'Cash Withdrawal',
            'AEPS Service',
            'Money Transfer',
            'Insurance Service',
            'PAN Card',
            'Bill Payment',
            'Mobile Recharge',
            'Online Form Fill-up'
          ].map((service, index) => (
            <div key={index} className='bg-white text-black p-6 rounded-3xl shadow-lg hover:scale-105 transition'>
              <h3 className='text-2xl font-bold mb-3'>{service}</h3>
              <p>Fast and secure customer service available here.</p>
            </div>
          ))}
        </div>
      </section>

      <section className='max-w-7xl mx-auto py-10 px-6'>
        <h2 className='text-3xl font-bold mb-10 text-center'>Admin Dashboard</h2>

        <div className='grid md:grid-cols-4 gap-6 mb-10'>
          <div className='bg-blue-600 p-6 rounded-3xl shadow-lg'>
            <h3 className='text-xl font-semibold'>Customers</h3>
            <p className='text-4xl font-bold mt-3'>120+</p>
          </div>

          <div className='bg-green-600 p-6 rounded-3xl shadow-lg'>
            <h3 className='text-xl font-semibold'>Transactions</h3>
            <p className='text-4xl font-bold mt-3'>₹58K</p>
          </div>

          <div className='bg-yellow-500 text-black p-6 rounded-3xl shadow-lg'>
            <h3 className='text-xl font-semibold'>Insurance</h3>
            <p className='text-4xl font-bold mt-3'>32</p>
          </div>

          <div className='bg-purple-600 p-6 rounded-3xl shadow-lg'>
            <h3 className='text-xl font-semibold'>Online Services</h3>
            <p className='text-4xl font-bold mt-3'>89</p>
          </div>
        </div>
      </section>

      <section className='bg-blue-900 text-white py-16 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
        <p>Phone: +91 8822527375</p>
        <p>Professional CSP & CSC Services Center</p>

        <a
          href='https://wa.me/918822527375'
          target='_blank'
          className='inline-block mt-6 bg-green-500 px-6 py-3 rounded-2xl font-bold'
        >
          WhatsApp Chat
        </a>
      </section>
    </div>
  )
}
