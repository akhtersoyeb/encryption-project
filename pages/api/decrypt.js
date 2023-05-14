import CryptoJS from "crypto-js"
import { levelOneEncryption } from "./encrypt";

function levelOneDecryption(encryptedMessage, shift) {
  // To decrypt, we just need to negate the shift value
  shift = (26 - shift) % 26;

  return levelOneEncryption(encryptedMessage, shift);
}

export default function handler(req, res) {
  const data = req.body
  const bytes = CryptoJS.AES.decrypt(data.cipher, data.secret)
  const msg1 = bytes.toString(CryptoJS.enc.Utf8)
  console.log(msg1)
  const msg2 = levelOneDecryption(msg1, 7)
  console.log(msg2)
  res.status(200).json({
    msg1: msg1,
    msg2: msg2
  })
}