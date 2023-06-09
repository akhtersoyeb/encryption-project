import { useState } from "react"
import { toast } from "react-toastify"

export default function Receiver() {
  const [secretKey, setSecretKey] = useState("")
  const [cipher, setCipher] = useState("")
  const [msgOne, setMsgOne] = useState("")
  const [msgTwo, setMsgTwo] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formBody = {
      cipher: cipher,
      secret: secretKey
    }

    const response = await fetch('/api/decrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formBody)
    })

    const data = await response.json()
    console.log(data)
    if (response.status === 200) {
      setMsgOne(data.msg1)
      setMsgTwo(data.msg2)
    }
  }

  return (
    <div className="w-full">
      <div className="bg-zinc-800 text-white rounded-xl px-6 py-5">
        <h1 className="text-center uppercase text-2xl pb-6">Receiver</h1>
        <form className="flex flex-col space-y-6" onSubmit={e => handleSubmit(e)}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="secret">Secret Key</label>
            <input
              className="text-slate-800 rounded-md"
              name="secret"
              value={secretKey}
              onChange={e => setSecretKey(e.target.value)}
              type="text"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="cipher">Cipher</label>
            <input
              className="text-slate-800 rounded-md"
              name="cipher"
              value={cipher}
              onChange={e => setCipher(e.target.value)}
              type="text"
            />
          </div>

          <button className="bg-green-700 px-2 py-2 text-white rounded-md hover:bg-green-800" type="submit">Decrypt</button>

          <hr />

          {msgOne && (
            <>
              <div className="flex flex-col space-y-2">
                <p>After level-II decryption, message is:</p>
                <p className="bg-white text-blue-600 rounded-md px-4 py-2">{msgOne}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p>After level-I decryption, message is:</p>
                <p className="bg-white text-blue-600 rounded-md px-4 py-2">{msgTwo}</p>
              </div>
            </>
          )}
        </form>
      </div>

    </div>
  )
}