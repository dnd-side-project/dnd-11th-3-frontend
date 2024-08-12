const fs = require('fs')
const path = require('path')

const copyFolderSync = async (from, to) => {
   try {
      fs.mkdirSync(to, { recursive: true })
      const elements = fs.readdirSync(from)
      for (const element of elements) {
         const fromPath = path.join(from, element)
         const toPath = path.join(to, element)
         if (fs.lstatSync(fromPath).isFile()) {
            fs.copyFileSync(fromPath, toPath)
         } else {
            await copyFolderSync(fromPath, toPath)
         }
      }
   } catch (error) {
      console.error(`Error copying folder from ${from} to ${to}:`, error)
      process.exit(1)
   }
}

const srcTokenPath = path.join(__dirname, 'src/design-system/token')
const destTokenPath = path.join(__dirname, '../gmi-design-system/src/token')

const srcIconPath = path.join(__dirname, 'src/design-system/icon')
const destIconPath = path.join(__dirname, '../gmi-design-system/src/icon')

const srcComponentPath = path.join(__dirname, 'src/design-system/component')
const destComponentPath = path.join(
   __dirname,
   '../gmi-design-system/src/component',
)

;(async () => {
   await copyFolderSync(srcTokenPath, destTokenPath)
   console.log(
      '[TOKEN] copied successfully. from client to gmi-design-system\n',
   )

   await copyFolderSync(srcComponentPath, destComponentPath)
   console.log(
      '[COMPONENT] copied successfully. from client to gmi-design-system\n',
   )

   await copyFolderSync(srcIconPath, destIconPath)
   console.log('[ICON] copied successfully. from client to gmi-design-system\n')

   console.log('Design system files copied successfully.')
})()
