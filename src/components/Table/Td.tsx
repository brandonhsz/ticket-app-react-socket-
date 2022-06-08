import React from 'react'

const Td = ({ ticket }: any) => {
  return (
    <>
      <td className='border-x-2 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{ticket.title}</td>
      <td className='border-x-2 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{ticket.description}</td>
      <td className='border-x-2 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{ticket.status}</td>
      <td className='border-x-2 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{ticket.priority}</td>
    </>
  )
}

export default Td