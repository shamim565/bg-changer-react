import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
            onClick={() => setColor("red")}
            className="bg-red-600 px-4 py-1
            rounded-full text-white shadow-lg"
            >Red</button>
            <button 
            onClick={() => setColor("green")}
            className="bg-green-600 px-4 py-1
            rounded-full text-white shadow-lg"
            >Green</button>
            <button 
            onClick={() => setColor("blue")}
            className="bg-blue-600 px-4 py-1
            rounded-full text-white shadow-lg"
            >Blue</button>
            <button 
            onClick={() => setColor("violet")}
            className="bg-violet-600 px-4 py-1
            rounded-full text-white shadow-lg"
            >Violet</button>
            <button 
            onClick={() => setColor("yellow")}
            className="bg-yellow-600 px-4 py-1
            rounded-full text-white shadow-lg"
            >Yellow</button>
            <button 
            onClick={() => setColor("black")}
            className="bg-black px-4 py-1
            rounded-full text-white shadow-lg"
            >Black</button>
          </div>
      </div>
    </div>
  )
}

export default App
