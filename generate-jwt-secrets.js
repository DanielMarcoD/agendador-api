const crypto = require('crypto')
const accessSecret = crypto.randomBytes(64).toString('hex')
const refreshSecret = crypto.randomBytes(64).toString('hex')