import React, { useState } from 'react';
import ChatReceitas from "./pages/ChatReceitas"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      <ChatReceitas />
    </div>
  )
}

export default App
