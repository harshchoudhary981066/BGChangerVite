import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    
     <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-2xl bg-white px-3 py-2">
          <button className="outline-none px-4 py-1  text-white shadow-lg rounded-full " onClick={() => {setColor("red")}} style={{backgroundColor : "red"}}>Red</button>
          <button className="outline-none px-4 py-1  text-white shadow-lg rounded-full" onClick={() => {setColor("green")}} style={{backgroundColor : "green"}}>Green</button>
          <button className="outline-none px-4 py-1  text-white shadow-lg rounded-full" onClick={() => {setColor("blue")}} style={{backgroundColor : "blue"}}>Blue</button>
        </div>
      </div>
     </div>
   
  )
}

export default App
