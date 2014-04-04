var fs = require('fs');

function loadCACertsFromFile(caCertFilename) {
  var caCertFileContents = fs.readFileSync(caCertFilename).toString();
  return PEMParser.loadCACerts(caCertFileContents);
}

function loadCACerts(caCertFileContents) {
  var END_CERT = '-----END CERTIFICATE-----';
      sections = caCertFileContents.split(END_CERT).slice(0, -1);
  return sections.map(function(section) {
    return (section + END_CERT).trim();
  });
}

exports.loadCACerts = loadCACerts;
exports.loadCACertsFromFile = loadCACertsFromFile;