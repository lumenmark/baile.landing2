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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <header className="text-center py-16 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Welcome to Baile.AI
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed font-light">

            We love dance — and we’ve been dancing forever. Now, we’re building the platform we always wished existed. 
            Made by dancers, for the dance community. Discover dance events in your city or wherever you travel. 
            Connect with dancers on and off the floor, find practice partners, request songs from DJs —  
            take your dance experience to the next level.
            

          </p>
        </header>

        <section className="flex flex-col lg:flex-row items-center justify-center gap-4 px-6 md:px-20 py-2">
          <div className="max-w-md w-full">
            {!submitted ? (
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                <form onSubmit={handleSubmit} className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
                  <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Request Early Access
                  </h2>
                  <p className="text-gray-200 text-center mb-6 text-base font-medium">
                    Early access is currently full. Enter your email, and we'll notify you as soon as a spot opens up.
                  </p>
                  <div className="mb-6">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 rounded-xl bg-white/5 backdrop-blur text-white placeholder-gray-400 border border-white/20 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all duration-300"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Request Early Access
                  </button>
                </form>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
                  <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Welcome to the Community!
                  </h2>
                  <p className="text-gray-300 text-center text-lg">We'll notify you when your early access is ready.</p>
                </div>
              </div>
            )}
          </div>
          <div className="max-w-md">
            <Image 
              src="/baile-phone-app.webp" 
              alt="Baile.AI App Preview" 
              width={400} 
              height={800} 
              className=""
            />
          </div>
        </section>

        <section className="px-6 md:px-20 py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">All the Events!</h3>
              <p className="text-gray-300">Always know where the dance events are — in your home city or wherever you're visiting, with all the details included.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Connect with Dancers</h3>
              <p className="text-gray-300">Find dance partners nearby or in cities you're visiting. Build your dance community.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">🏃‍♀️</div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">Organize Practices</h3>
              <p className="text-gray-300">Create and join practice sessions. Improve your skills with fellow dancers.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Smart Alerts</h3>
              <p className="text-gray-300">Never miss an event. Get personalized notifications for upcoming dance events.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">💃</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">By Dancers, For Dancers</h3>
              <p className="text-gray-300">Created by passionate dancers who understand the community's needs and challenges.</p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-20 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Launching Soon In:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['New York City', 'Austin', 'Dallas', 'Houston', 'Miami', 'Portland', 'Seattle','San Francisco'].map(city => (
                <a 
                  key={city} 
                  href={`/${city.toLowerCase().replace(/ /g, '-')}`} 
                  className="bg-white/5 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/10 hover:border-pink-400/50 text-pink-400 hover:text-pink-300 transition-all duration-300 hover:transform hover:scale-105 font-medium"
                >
                  {city}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}