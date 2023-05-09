import CryptoJS from "crypto-js"

export default function handler(req, res) {
  const data = req.body
  const bytes = CryptoJS.AES.decrypt(data.cipher, data.secret);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  res.status(200).json({
    message: originalText
  })
}