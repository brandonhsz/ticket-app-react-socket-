import { useState } from 'react'
import Tickets from './components/Tickets'
import socket from './sockets/index'
const App = () => {

  const [message, setMessage] = useState('')
  const [data, setData] = useState([])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    socket.sendMessage('findAllTickets', {})
    setMessage('')
  }

  socket.socket.on('ticket', (message: any) => {
    console.log('ticket');
    setData(message);
  })

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder='message'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type='submit' onClick={handleSubmit}>Send</button>

      </form>

      <Tickets tickets={data} />

    </div>
  )
}

export default App