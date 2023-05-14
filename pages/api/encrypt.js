import CryptoJS from "crypto-js"


export function levelOneEncryption(message, shift) {
  var encryptedMessage = '';

  for (var i = 0; i < message.length; i++) {
    var char = message[i];

    // Encrypt uppercase letters
    if (char >= 'A' && char <= 'Z') {
      encryptedMessage += String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
    }
    // Encrypt lowercase letters
    else if (char >= 'a' && char <= 'z') {
      encryptedMessage += String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
    }
    // Preserve non-alphabetic characters
    else {
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}

export default function handler(req, res) {
  const data = req.body

  const cipher1 = levelOneEncryption(data.message, 7)

  const cipher2 = CryptoJS.AES.encrypt(cipher1, data.key).toString()
  res.status(200).json({
    cipher1: cipher1,
    cipher2: cipher2
  })
}