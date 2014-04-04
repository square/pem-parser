var fs = require('fs');

function loadCACertsFromFile(caCertFilename) {
  var caCertFileContents = fs.readFileSync(caCertFilename).toString('utf8');
  return PEMParser.loadCACerts(caCertFileContents);
};

function loadCACerts(caCertFileContents) {
  var caCerts = [],
      endStr = '-----END CERTIFICATE-----',
      parts = caCertFileContents.split(endStr);
  for (var i=0; i<parts.length-1; i++) {
    var cert = parts[i];
    cert += endStr;
    cert = cert.trim();
    caCerts.push(cert);
  }
  return caCerts;
};

module.exports.loadCACerts = loadCACerts;
module.exports.loadCACertsFromFile = loadCACertsFromFile;