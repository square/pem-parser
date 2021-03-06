/* global describe, it, before */

var expect = require('chai').expect,
    mocks = require('mocks'),
    proxyquire = require('proxyquire');

function certify(certStr, trim) {
  return '-----BEGIN CERTIFICATE-----\n' + certStr.trim() + '\n-----END CERTIFICATE-----' + (trim ? '' : '\n');
}

describe('pem-parser', function() {
  var PEMParser;

  before(function() {
    var mockFS = mocks.fs.create({
      'ca_cert': mocks.fs.file(0, certify('abcd'))
    });

    PEMParser = proxyquire('..', {
      'fs': mockFS
    });
  });

  it ('parses certificates from a file', function() {
    expect(PEMParser.loadCACertsFromFile('ca_cert')).to.be.eql([certify('abcd', true)]);
  });
  it ('parses two certificates', function() {
    expect(PEMParser.loadCACerts(certify('abcd') + certify('efgh'))).to.be.eql([
      certify('abcd', true),
      certify('efgh', true)
    ]);
  });
  it ('parses three certificates', function() {
    expect(PEMParser.loadCACerts(certify('abcd')  + certify('efgh')  + certify('jklm'))).to.be.eql([
      certify('abcd', true),
      certify('efgh', true),
      certify('jklm', true)
    ]);
  });
  it ('parses a certs with dashes', function() {
    expect(PEMParser.loadCACerts(certify('a--b') + certify('c--d'))).to.be.eql([
      certify('a--b', true),
      certify('c--d', true)
    ]);
  });
});
