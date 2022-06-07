import React from 'react'

const Tickets = ({ tickets }: any) => {
  return (
    <ul>
      {
        tickets.map((ticket: any) => (
          <li key={ticket._id}>
            <p>{ticket.title}</p>
            <p>{ticket.description}</p>
            <p>{ticket.status}</p>
            <p>{ticket.priority}</p>
          </li>
        ))
      }
    </ul>
  )
}

export default Tickets