import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getCityData, getAllCities } from '../utils/cityData'

export default function CityPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [referrer, setReferrer] = useState('')
  const router = useRouter()
  const { city } = router.query
  
  const cityData = getCityData(city)
  const allCities = getAllCities()

  useEffect(() => {
    setReferrer(document.referrer || '')
  }, [])

  if (!cityData) {
    return <div>City not found</div>
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('https://previewapi.sublease.ai/api/EarlyAccessSignUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        type: '',
        referrer,
        app: 'Baile',
        city: cityData.name
      })
    })
    if (res.ok) setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>{cityData.seo.title}</title>
        <meta name="description" content={cityData.seo.description} />
        <meta name="keywords" content={cityData.seo.keywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://baile.ai/${city}`} />
        <meta property="og:title" content={cityData.seo.title} />
        <meta property="og:description" content={cityData.seo.description} />
        <meta property="og:image" content="https://baile.ai/baile-phone-app.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://baile.ai/${city}`} />
        <meta property="twitter:title" content={cityData.seo.title} />
        <meta property="twitter:description" content={cityData.seo.description} />
        <meta property="twitter:image" content="https://baile.ai/baile-phone-app.jpg" />
        
        <link rel="canonical" href={`https://baile.ai/${city}`} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Baile.AI",
              "description": cityData.seo.description,
              "url": `https://baile.ai/${city}`,
              "applicationCategory": "SocialNetworkingApplication",
              "operatingSystem": "iOS, Android",
              "areaServed": {
                "@type": "City",
                "name": cityData.name
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "Baile.AI"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <header className="text-center pt-7 md:pt-16 pb-8 md:pb-16 px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
              {cityData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed font-light">
              {cityData.hero.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 max-w-3xl mx-auto text-left">
              <div className="flex items-start space-x-3 text-lg text-gray-300">
                <span className="text-2xl flex-shrink-0">📍</span>
                <span>Discover dance events in {cityData.name}  or wherever you travel</span>
              </div>
              <div className="flex items-start space-x-3 text-lg text-gray-300">
                <span className="text-2xl flex-shrink-0">👥</span>
                <span>Connect with dancers on and off the floor</span>
              </div>
              <div className="flex items-start space-x-3 text-lg text-gray-300">
                <span className="text-2xl flex-shrink-0">🤝</span>
                <span>Find practice partners</span>
              </div>
              <div className="flex items-start space-x-3 text-lg text-gray-300">
                <span className="text-2xl flex-shrink-0">🎵</span>
                <span>Get alerts of upcoming events</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed font-light">
            Take your dance experience to the next level.
            </p>
          </header>

          <section className="flex flex-col lg:flex-row items-center justify-center gap-4 px-6 md:px-20 py-2">
            <div className="max-w-md w-full order-2 lg:order-1">
              {!submitted ? (
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                  <form onSubmit={handleSubmit} className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
                    <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      Join {cityData.name} Dancers
                    </h2>
                    <p className="text-gray-200 text-center mb-6 text-base font-medium">
                      Get early access to {cityData.name}'s premier dance community platform.
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
                      Join Early Access
                    </button>
                  </form>
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
                    <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      Welcome to {cityData.name}!
                    </h2>
                    <p className="text-gray-300 text-center text-lg">We'll notify you when early access is ready in {cityData.name}.</p>
                  </div>
                </div>
              )}
            </div>
            <div className="max-w-md order-1 lg:order-2">
              <Image 
                src="/baile-phone-app.webp" 
                alt="Baile.AI App Preview" 
                width={400} 
                height={800} 
                className=""
              />
            </div>
          </section>

          {/* About Baile.AI */}
          <section className="px-6 md:px-20 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-300 leading-relaxed">
                We love dance — and we've been dancing forever. Now, we're building the platform we always wished existed. 
                Made by dancers, for the dance community. 
              </p>
            </div>
          </section>

          {/* Dance Scene Overview */}
          <section className="px-6 md:px-20 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {cityData.name} Dance Scene
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {cityData.danceScene.overview}
              </p>
            </div>
          </section>

          {/* Featured Dance Styles */}
          <section className="px-6 md:px-20 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Popular Dance Styles in {cityData.name}
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {cityData.danceStyles.map((style, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-3xl mb-4">{style.emoji}</div>
                    <h3 className="text-xl font-semibold mb-3 text-pink-400">{style.name}</h3>
                    <p className="text-gray-300">{style.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Platform Features */}
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

          {/* Local Dance Community */}
          <section className="px-6 md:px-20 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {cityData.name} Dance Community
              </h2>
              
              {/* Dance Schools */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Featured Dance Schools</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {cityData.danceSchools.map((school, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
                      <h4 className="text-lg font-semibold text-pink-400 mb-2">{school.name}</h4>
                      <p className="text-gray-300 text-sm mb-2">{school.specialties.join(', ')}</p>
                      <p className="text-gray-400 text-sm">{school.area}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Venues */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Popular Dance Venues</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {cityData.venues.map((venue, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
                      <h4 className="text-lg font-semibold text-pink-400 mb-2">{venue.name}</h4>
                      <p className="text-gray-300 text-sm mb-2">{venue.type}</p>
                      <p className="text-gray-400 text-sm">{venue.area}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Other Cities */}
          <section className="px-6 md:px-20 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Also Available In
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allCities.map(citySlug => {
                  const otherCityData = getCityData(citySlug)
                  const isCurrentCity = citySlug === city
                  return (
                    <div key={citySlug}>
                      {isCurrentCity ? (
                        <div className="bg-pink-500/20 backdrop-blur-lg px-4 py-3 rounded-xl border border-pink-400/50 text-pink-300 font-medium cursor-default">
                          {otherCityData.name}
                        </div>
                      ) : (
                        <a 
                          href={`/${citySlug}`} 
                          className="bg-white/5 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/10 hover:border-pink-400/50 text-pink-400 hover:text-pink-300 transition-all duration-300 hover:transform hover:scale-105 font-medium block"
                        >
                          {otherCityData.name}
                        </a>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="px-6 md:px-20 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Dance in {cityData.name}?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of dancers already signed up for early access in {cityData.name}.
              </p>
              {!submitted && (
                <button 
                  onClick={() => document.querySelector('input[type="email"]').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Get Early Access
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}