/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
   eslint: {
      ignoreDuringBuilds: true,
   },
}

export default withVanillaExtract(nextConfig)
