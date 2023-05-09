import CryptoJS from "crypto-js"

export default function handler(req, res) {
  const data = req.body
  const ciphertext = CryptoJS.AES.encrypt(data.message, data.key).toString()
  res.status(200).json({
    cipher: ciphertext
  })
}