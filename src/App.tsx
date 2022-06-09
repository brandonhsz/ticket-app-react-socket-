import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Formulario from './components/Formulario/Formulario'
import Spin from './components/Spin/Spin'
import Tickets from './components/Tickets/Tickets'
import socket from './sockets/index'

import { useSocket } from './hooks/useSocket'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {

  const { data, setData, message, handleChange, handleSubmit } = useSocket()

  socket.socket.on('ticket', (message: any) => {
    console.log('ticket');
    setData(message);
  })

  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/" element={<Formulario />}
        />


        <Route path="tickets" element={
          data.length > 0 ? <Tickets tickets={data} /> : <Spin />
        } />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App