/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs').promises
const path = require('path')

const prepareDir = path.join(__dirname, '/src/icon/prepare')
const assetDir = path.join(__dirname, '/src/icon/asset')

// [export 구문 생성] ./src/icon/default 디렉토리 내 icon파일 목록 업데이트
const directoryPath = path.join(__dirname, './src/icon/default')
const indexPath = path.join(directoryPath, 'index.ts')

async function updateIconExports() {
  try {
    const files = await fs.readdir(directoryPath)

    // .tsx 파일들만 필터링합니다.
    const tsxFiles = files.filter(file => path.extname(file) === '.tsx')

    // 각 파일에 대해 export 구문을 생성합니다.
    const exportStatements = tsxFiles
      .map(file => {
        const basename = path.basename(file, '.tsx')
        return `export { ${basename} } from './${basename}';`
      })
      .join('\n')

    // index.ts 파일에 추가합니다.
    await fs.writeFile(indexPath, exportStatements)
    console.log('index.ts 파일이 성공적으로 업데이트되었습니다.')
  } catch (err) {
    console.log('[update export component] 오류 발생: ' + err)
    process.exit(1)
  }
}

async function moveNewIconFiles() {
  try {
    const files = await fs.readdir(prepareDir)

    for (const file of files) {
      const prepareFilePath = path.join(prepareDir, file)
      const assetFilePath = path.join(assetDir, file)

      // 파일 이동
      await fs.rename(prepareFilePath, assetFilePath)
      console.log(`Moved ${file} to ${assetDir}`)
    }
  } catch (err) {
    console.error(`[move icon] 오류 발생: ${err.message}`)
    process.exit(1)
  }
}

async function main() {
  await updateIconExports()
  await moveNewIconFiles()
  console.log('[refactor icon success] 모든 작업이 완료되었습니다.')
}

main()
