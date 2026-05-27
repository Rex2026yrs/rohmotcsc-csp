// FILE: package.json
{
  "name": "rohmot-csp-csc",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.2.0"
  }
}

// FILE: vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

// FILE: index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rohmot CSP CSC</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

// FILE: src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// FILE: src/App.jsx
import { useState } from 'react'
import cspLogo from './assets/csp-logo.png'
import cscLogo from './assets/csc-logo.png'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  const services = [
    'Cash Deposit',
    'Cash Withdrawal',
    'AEPS Service',
    'Money Transfer',
    'Account Opening',
    'Insurance Service',
    'PAN Card',
    'Bill Payment',
    'Mobile Recharge',
    'Online Form Fill-up'
  ]

  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-gray-100 text-black min-h-screen'}>
      <header className='bg-blue-900 text-white shadow-2xl'>
        <div className='max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between'>
          <img
            src={cspLogo}
            alt='CSP Logo'
            className='w-24 h-24 object-contain mb-4 md:mb-0'
          />

          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold'>
              Rohmot CSP & CSC
            </h1>

            <p className='mt-3 text-lg text-blue-100'>
              Professional Banking & Digital Services
            </p>
          </div>

          <img
            src={cscLogo}
            alt='CSC Logo'
            className='w-24 h-24 object-contain mt-4 md:mt-0'
          />
        </div>
      </header>

      <section className='bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-6 text-center'>
        <h2 className='text-5xl font-bold mb-6'>
          Trusted CSP & CSC Services
        </h2>

        <p className='max-w-3xl mx-auto text-lg text-blue-100 leading-relaxed'>
          Banking, AEPS, Account Opening, Insurance, PAN Card,
          Bill Payment and all digital services available at one place.
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className='mt-8 bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition'
        >
          🌙 / ☀️ Dark-Light Theme
        </button>
      </section>

      <section className='max-w-7xl mx-auto py-20 px-6'>
        <h2 className='text-4xl font-bold text-center mb-12'>Our Services</h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white text-black rounded-3xl shadow-2xl p-8 hover:scale-105 transition duration-300'
            >
              <div className='text-5xl mb-5'>💼</div>

              <h3 className='text-2xl font-bold mb-4'>
                {service}
              </h3>

              <p className='text-gray-600 leading-relaxed'>
                Fast, secure and customer-friendly professional service.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-gray-800 py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-14'>
            Admin Dashboard
          </h2>

          <div className='grid md:grid-cols-4 gap-6'>
            <div className='bg-blue-600 rounded-3xl p-8 sha
