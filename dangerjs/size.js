const {
  committedFilesGrep,
  fileAddedLineNumbers,
  fileRemovedLineNumbers,
} = require('danger-plugin-toolbox')
const { getRandomImage } = require('./data/helpers')

const getModifiedFilesWithoutTests = () => {
  const testFilesRegex = /^(?!.*\.(spec|test)\.(ts)$).*\.ts$/gm

  return committedFilesGrep(testFilesRegex)
}

const sizeError = [
  '**Big PR**\n\n',
  'Pull Request size seems relatively large. If the Pull Request contains multiple changes, splitting each of them into a separate PR will foster faster, easier reviews.\n\n',
  `![img](${getRandomImage('bigPR')}, 'Oops')\n`
]

async function checkSize({ sizeLimit }) {
  const modifiedFiles = getModifiedFilesWithoutTests()

  let numberOfChangedLines = 0
  await Promise.all(
    modifiedFiles.map(async filePath => {
      const addedLinesArray = await fileAddedLineNumbers(filePath)
      const removedLinesArray = await fileRemovedLineNumbers(filePath)

      numberOfChangedLines += addedLinesArray.length + removedLinesArray.length
    })
  )

  if (numberOfChangedLines > sizeLimit) {
    return sizeError.join('')
  }
}

module.exports = {
  checkSize
}
