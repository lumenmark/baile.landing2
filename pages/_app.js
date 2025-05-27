import '../styles/globals.css'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Baile.AI - The Dance Community Platform</title>
        <meta name="description" content="Discover dance events, connect with dancers, and organize practice sessions. Made by dancers, for the dance community. Coming soon to NYC, Austin, Dallas, Houston, Miami, Portland, Seattle, and San Francisco." />
        <meta name="keywords" content="dance, dance events, dance community, salsa, bachata, kizomba, social dancing, dance partners, practice sessions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Baile.AI" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baile.ai/" />
        <meta property="og:title" content="Baile.AI - The Dance Community Platform" />
        <meta property="og:description" content="Discover dance events, connect with dancers, and organize practice sessions. Made by dancers, for the dance community." />
        <meta property="og:image" content="https://baile.ai/baile-phone-app.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://baile.ai/" />
        <meta property="twitter:title" content="Baile.AI - The Dance Community Platform" />
        <meta property="twitter:description" content="Discover dance events, connect with dancers, and organize practice sessions. Made by dancers, for the dance community." />
        <meta property="twitter:image" content="https://baile.ai/baile-phone-app.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://baile.ai/" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp