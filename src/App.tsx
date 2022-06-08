import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Formulario from './components/Formulario'
import Spin from './components/Spin/Spin'
import Tickets from './components/Tickets'
import socket from './sockets/index'

import { useSocket } from './hooks/useSocket'

const App = () => {

  const { data, setData, message, handleChange, handleSubmit } = useSocket()

  socket.socket.on('ticket', (message: any) => {
    console.log('ticket');
    setData(message);
  })

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Formulario />}
        />

        <Route path="tickets" element={
          data.length > 0 ? <Tickets tickets={data} /> : <Spin />
        } />

      </Routes>


    </BrowserRouter>
  )
}

export default App