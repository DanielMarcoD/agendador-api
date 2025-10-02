import { constants, privateDecrypt } from 'crypto'
import { privateKey } from '../../security/keys'

export function decryptPassword(b64: string) {
  const buf = Buffer.from(b64, 'base64')
  const out = privateDecrypt({ key: privateKey, oaepHash: 'sha256', padding: constants.RSA_PKCS1_OAEP_PADDING }, buf)
  return out.toString('utf8')
}

export function decryptData(b64: string) {
  const buf = Buffer.from(b64, 'base64')
  const out = privateDecrypt({ key: privateKey, oaepHash: 'sha256', padding: constants.RSA_PKCS1_OAEP_PADDING }, buf)
  return out.toString('utf8')
}
