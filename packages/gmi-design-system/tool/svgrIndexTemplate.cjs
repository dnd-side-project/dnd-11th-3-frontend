/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/**
 * @param {Array} files - Array of file information objects
 * @returns {string} - Formatted string for the index file
 */
const indexTemplate = files => {
  const exportEntries = files.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath))
    return `export { ${basename} } from './${basename}';`
  })
  return exportEntries.join('\n')
}
module.exports = indexTemplate
