import { useState } from "react"
import { toast } from "react-toastify"


export default function Sender({ changeCipher }) {
  const [secretKey, setSecretKey] = useState("")
  const [msg, setMsg] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      key: secretKey,
      message: msg
    }
    const response = await fetch('/api/encrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const resData = await response.json()
    if (response.status === 200) {
      changeCipher(resData.cipher)
      // toast('Successfully encrypted.')
    }
  }

  return (
    <div className="bg-slate-800 text-white rounded-xl px-6 py-5 w-full">
      <h1 className="text-center uppercase text-2xl pb-6">Sender</h1>
      <form className="flex flex-col space-y-6" onSubmit={e => handleSubmit(e)}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="secret">Secret Key</label>
          <input
            className="text-slate-800 rounded-md"
            name="secret"
            value={secretKey}
            onChange={e => setSecretKey(e.target.value)}
            type="text"
            required={true}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message">Message</label>
          <input
            className="text-slate-800 rounded-md"
            name="message"
            value={msg}
            onChange={e => setMsg(e.target.value)}
            type="text"
            required={true}
          />
        </div>

        <button className="bg-blue-700 px-2 py-2 text-white rounded-md hover:bg-blue-800" type="submit">Encrypt</button>
      </form>
    </div>
  )
}