const versionNotBumpedError = [
  'Please ensure the package version has been bumped in accordance with [Semantic Versioning](https://semver.org/)\n',
  'and run `npm i` to update `package-lock.json`\n'
]

const VERSION_QUERY = '"version":';

function checkForVersionUpdate ({ versionValidation, packageJsonDiff }) {
  if (!versionValidation) return

  if(packageJsonDiff && packageJsonDiff.added.includes(VERSION_QUERY)) return

  return versionNotBumpedError.join('')
}

module.exports = {
  checkForVersionUpdate
}
