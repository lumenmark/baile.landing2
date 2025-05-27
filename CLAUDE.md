# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js landing page for Baile.AI - a dance community platform. The application is a single-page React app that collects email signups for early access.

## Common Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm start` - Start production server

## Architecture
- **Framework**: Next.js with React
- **Styling**: Tailwind CSS with custom glass morphism effects
- **Pages**: Single landing page (`pages/index.js`) with email signup form
- **API Integration**: Form submits to external API at `https://previewapi.sublease.ai/api/EarlyAccessSignUp`
- **Assets**: Phone app preview images in `/public/` directory

## Key Components
- Email signup form with glassmorphism styling
- Feature showcase grid with hover animations
- City launch list with dynamic routing links
- Gradient backgrounds and custom animations defined in `globals.css`

## Styling Patterns
- Uses Tailwind utility classes with gradient text effects (`bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent`)
- Glass morphism effects via backdrop-blur and transparency
- Custom animations: `animate-float` and `animate-glow` defined in CSS
- Responsive design with mobile-first approach