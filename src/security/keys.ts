import { createHash, generateKeyPairSync } from 'crypto'

export const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
})

export const kid = createHash('sha256').update(publicKey).digest('hex')
