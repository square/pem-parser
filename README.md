pem-parser
==========
Breaks apart CA Certificate files that contain multiple PEMs into an array of PEMs. This is useful when you are passing CA Certificate files which contains multiple PEMs into tls.connect.

The [TLS documentation](http://nodejs.org/api/tls.html#tls_tls_connect_port_host_options_callback) indicates that the ca option can be either a string containing a single PEM or an array of strings, each containing its own PEM.

## Install

```
$ npm install pem-parser
```

## Usage

```js
var PEMParser = require('pem-parser');
var caCerts = PEMParser.loadCACertsFromFile(caCertFilename); // The file named caCertFilename can contain multiple PEMs.
var socket = require('tls').connect(this.port, this.host, {
  key:  fs.readFileSync(keyFile),
  cert: fs.readFileSync(certFile),
  ca: caCerts
}, function(){
  console.log('Connected!');
});

// or alternatively, you can do:
var fileContents = fs.readFileSync(caCertFilename).toString();
var caCerts = PEMParser.loadCACerts(fileContents);
```

### Setup

First, install the development dependencies:

```
$ npm install
```

Then, try running the tests:

```
$ npm test
```

### Pull Requests

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Make sure the tests pass by calling `npm test`.
5. Make sure the linter passes by calling `npm run-script lint`.
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

Any contributors to the master pem-parser repository must sign the [Individual
Contributor License Agreement (CLA)][cla].  It's a short form that covers our
bases and makes sure you're eligible to contribute.

[cla]: https://spreadsheets.google.com/spreadsheet/viewform?formkey=dDViT2xzUHAwRkI3X3k5Z0lQM091OGc6MQ&ndplr=1

When you have a change you'd like to see in the master repository, [send a pull
request](https://github.com/square/pem-parser/pulls). Before we merge your
request, we'll make sure you're in the list of people who have signed a CLA.
