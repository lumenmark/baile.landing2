import Link from 'next/link'
import { getAllCities, getCityData } from '../utils/cityData'

export default function Custom404() {
  const allCityData = getAllCities().map(citySlug => ({
    slug: citySlug,
    ...getCityData(citySlug)
  }))

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-10">
          
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 mt-8">
              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-8 leading-tight">
                Page Not Found
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Looks like this dance floor doesn't exist yet. Let's get you back to where the music is playing!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="mb-12 max-w-md mx-auto">
              <Link href="/" className="group">
                <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-3xl mb-3">🏠</div>
                  <h3 className="text-lg font-semibold text-pink-400 group-hover:text-pink-300">
                    Go Back to Baile.AI
                  </h3>
                </div>
              </Link>
            </div>

            {/* All Cities */}
            <div id="cities-list" className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Available Dance Cities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {allCityData.map(city => (
                  <Link 
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="bg-white/5 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/10 hover:border-pink-400/50 text-pink-400 hover:text-pink-300 transition-all duration-300 hover:transform hover:scale-105 font-medium text-sm"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Text */}
            <div className="mt-16 mb-16 p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold mb-4 text-gray-200">
                Need Help?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                
                Check back soon or <Link href="/" className="text-pink-400 hover:text-pink-300 underline">request early access</Link> when a spot opens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}