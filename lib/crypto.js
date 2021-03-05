// Before hypercore-crypto existed, all of ddatabase's crypto operations lived here.
// This only exists for backwards compatibility with projects that explicitly require this file.
// Please use the hypercore-crypto package directly instead.
// https://github.com/dwebprotocol/ddatabase-protocol
module.exports = require('@ddatabase/crypto')
