const versionNotBumpedError = [
  'Please ensure the package version has been bumped in accordance with [Semantic Versioning](https://semver.org/)\n',
  'and run `npm i` to update `package-lock.json`\n'
]

/**
 * TODO: Improve function to look for version bump vs checking files changed
 */
function checkForVersionUpdate ({ versionValidation, packageJsonDiff }) {
  if (!versionValidation) return
  if(packageJsonDiff.includes('"version": ')) return

  return versionNotBumpedError.join('')
}

module.exports = {
  checkForVersionUpdate
}
