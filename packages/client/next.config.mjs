/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import path from 'path'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   webpack: (config) => {
      config.resolve.alias['@gmi-design-system'] = path.resolve(
         __dirname,
         '../gmi-design-system/src',
      )
      return config
   },
}

export default withVanillaExtract(nextConfig)
