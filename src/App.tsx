import { useState } from 'react'
import Formulario from './components/Formulario'
import Tickets from './components/Tickets'
import socket from './sockets/index'
const App = () => {

  const [message, setMessage] = useState({
    title: '',
    description: '',
    status: '',
    priority: ''
  })
  const [data, setData] = useState([])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    socket.sendMessage('createTicket', message)
    setMessage({
      title: '',
      description: '',
      status: '',
      priority: ''
    })
  }

  const handleChange = (e: any) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  }

  socket.socket.on('ticket', (message: any) => {
    console.log('ticket');
    setData(message);
  })

  return (
    <div>

      <Formulario
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        message={message}
      />
      <Tickets tickets={data} />

    </div>
  )
}

export default App