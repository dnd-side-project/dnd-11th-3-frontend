import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import path from 'path'
import { fileURLToPath } from 'url'

// ES 모듈에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**', // all domains
         },
      ],
   },
}

export default withVanillaExtract(nextConfig)
