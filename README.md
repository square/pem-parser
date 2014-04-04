pem-parser
==========
Breaks apart CA Certificate files that contain multiple PEMs into an array of PEMs. This is useful when you are passing CA Cert files into tls. For example, this:

The [TLS documentation](http://nodejs.org/api/tls.html#tls_tls_connect_port_host_options_callback) indicates that the ca options can be either a string containing a single PEM or an array of strings, each containing its own PEM.

## Install

```
$ npm install pem-parser
```

## Usage

```js
var PEMParser = require('pem-parser');
var socket = require('tls').connect(this.port, this.host, {
  key:  fs.readFileSync(keyFile),
  cert: fs.readFileSync(certFile),
  ca: PEMParser.loadCACertsFromFile(caCertFile) # caCertFile contains multiple PEMs.
}, function(){
  console.log('Connected!');
});
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
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Any contributors to the master pem-parser repository must sign the [Individual
Contributor License Agreement (CLA)][cla].  It's a short form that covers our
bases and makes sure you're eligible to contribute.

[cla]: https://spreadsheets.google.com/spreadsheet/viewform?formkey=dDViT2xzUHAwRkI3X3k5Z0lQM091OGc6MQ&ndplr=1

When you have a change you'd like to see in the master repository, [send a pull
request](https://github.com/square/pem-parser/pulls). Before we merge your
request, we'll make sure you're in the list of people who have signed a CLA.