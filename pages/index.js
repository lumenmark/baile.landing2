import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [referrer, setReferrer] = useState('')

  useEffect(() => {
    setReferrer(document.referrer || '')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('https://previewapi.sublease.ai/api/EarlyAccessSignUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        type: '',
        referrer,
        app: 'Baile'
      })
    })
    if (res.ok) setSubmitted(true)
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Baile.AI</h1>
        <p className="text-lg max-w-xl mx-auto">Discover all social dance events in your city. Connect with dancers. Organize practices. Always be in the know.</p>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20">
        <div className="max-w-md">
          <Image 
            src="/baile-phone-app.jpg" 
            alt="Baile.AI App Preview" 
            width={400} 
            height={800} 
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="max-w-md">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">Sign up for early access</h2>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 text-white mb-4"
              />
              <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded">Request Access</button>
            </form>
          ) : (
            <div className="bg-green-700 text-white p-6 rounded-xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-2">Thanks for signing up!</h2>
              <p>We’ll be in touch when your early access is approved.</p>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 md:px-20 mt-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Baile.AI?</h2>
        <ul className="grid gap-4 md:grid-cols-2 text-lg">
          <li>• Comprehensive list of dance events in many cities</li>
          <li>• Connect with dancers nearby or in cities you're visiting</li>
          <li>• Find practice partners and organize practice events</li>
          <li>• Always be in the know. Get alerts of upcoming events</li>
          <li>• Built by dancers, for dancers</li>
        </ul>
      </section>

      <section className="px-6 md:px-20 mt-20">
        <h2 className="text-2xl font-semibold mb-4">Launching Soon In:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-pink-500">
          {['New York City', 'Austin', 'Dallas', 'Houston', 'Miami', 'Portland', 'Seattle'].map(city => (
            <a key={city} href={`/${city.toLowerCase().replace(/ /g, '-')}`} className="hover:underline">{city}</a>
          ))}
        </div>
      </section>
    </div>
  )
}
