import Receiver from "@/components/Receiver";
import Sender from "@/components/Sender";
import { useState } from "react";

export default function Home() {
  const [cipher, setCipher] = useState("")

  const changeCipher = value => {
    setCipher(value)
  }

  return (
    <main className="container mx-auto max-w-6xl">
      <h1 className="text-5xl font-bold text-center py-10 text-slate-700">Encryption Project</h1>
      {cipher && (
        <div className="flex flex-col items-center space-y-2 pb-10">
          <p className="text-center">Cipher Text</p>
          <p className="text-center bg-green-100 text-green-800 px-4 py-2 rounded-md">{cipher}</p>
        </div>
      )}
      <div className="flex justify-between space-x-6">
        <Sender changeCipher={changeCipher} />
        <Receiver />
      </div>
    </main>
  )
}
