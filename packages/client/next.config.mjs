/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
module.exports = {
   eslint: {
      ignoreDuringBuilds: true,
   },
}

export default withVanillaExtract(nextConfig)
