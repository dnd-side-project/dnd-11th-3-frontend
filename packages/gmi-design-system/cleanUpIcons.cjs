const fs = require('fs')
const path = require('path')

const prepareDir = path.join(__dirname, '/src/icon/prepare')
const assetDir = path.join(__dirname, '/src/icon/asset')

// 디렉토리 내 파일 목록 가져오기\
fs.readdir(prepareDir, (err, files) => {
  if (err) {
    console.error(`Failed to read directory: ${err.message}`)
    process.exit(1)
  }

  files.forEach(file => {
    const prepareFilePath = path.join(prepareDir, file)
    const assetFilePath = path.join(assetDir, file)

    // 파일 이동
    fs.rename(prepareFilePath, assetFilePath, err => {
      if (err) {
        console.error(`Failed to move file: ${err.message}`)
        process.exit(1)
      }

      console.log(`Moved ${file} to ${assetDir}`)
    })
  })

  // 디렉토리 내 파일 삭제
  files.forEach(file => {
    const prepareFilePath = path.join(prepareDir, file)

    fs.unlink(prepareFilePath, err => {
      if (err) {
        console.error(`Failed to delete file: ${err.message}`)
        process.exit(1)
      }

      console.log(`Deleted ${file} from ${prepareDir}`)
    })
  })
})
