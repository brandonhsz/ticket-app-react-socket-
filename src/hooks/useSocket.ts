import { useState } from 'react'
import socket from '../sockets/index'
export const useSocket = () => {
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
  return {
    handleChange,
    handleSubmit,
    message,
    data,
    setData
  }
}
