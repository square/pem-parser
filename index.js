var fs = require('fs');

/**
 * @param {string} caCertFilename The filename of a ca cert file.
 * @return {array} A list of PEM strings, one for each PEM in the passed in file.
 */
function loadCACertsFromFile(caCertFilename) {
  var caCertFileContents = fs.readFileSync(caCertFilename).toString();
  return PEMParser.loadCACerts(caCertFileContents);
}

/**
 * @param {string} caCertFileContents The contents of a cert file.
 * @return {array} A list of PEM strings, one for each PEM in the passed in file.
 */
function loadCACerts(caCertFileContents) {
  var END_CERT = '-----END CERTIFICATE-----';
      sections = caCertFileContents.split(END_CERT).slice(0, -1);
  return sections.map(function(section) {
    return (section + END_CERT).trim();
  });
}

exports.loadCACerts = loadCACerts;
exports.loadCACertsFromFile = loadCACertsFromFile;