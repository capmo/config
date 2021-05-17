const versionNotBumpedError = [
  'Please ensure the package version has been bumped in accordance with [Semantic Versioning](https://semver.org/)'
]

const PACKAGE_JSON_VERSION_PROP_QUERY = '"version": ';

function checkForVersionUpdate ({ versionValidation, packageJsonDiff }) {
  if (!versionValidation) return

  if(packageJsonDiff && packageJsonDiff.added.includes(PACKAGE_JSON_VERSION_PROP_QUERY)) return

  return versionNotBumpedError.join('')
}

module.exports = {
  checkForVersionUpdate
}
