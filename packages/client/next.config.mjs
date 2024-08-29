import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import path from 'path'
import { fileURLToPath } from 'url'

// ES 모듈에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const withVanillaExtract = createVanillaExtractPlugin()
const API_BASE_URL = process.env.API_BASE_URL

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   trailingSlash: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**', // all domains
         },
      ],
   },
   async rewrites() {
      return [
         {
            source: '/api/:path*/',
            destination: `${API_BASE_URL}/:path*/`,
         },
      ]
   },
}

export default withVanillaExtract(nextConfig)
