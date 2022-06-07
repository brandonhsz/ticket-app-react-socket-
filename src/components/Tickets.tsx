import React from 'react'
import Th from './Table/Th'

const Tickets = ({ tickets }: any) => {
  return (
    <div className='relative rounded-xl overflow-auto'>
      <div className='shadow-sm overflow-hidden my-8'>
        <table className='border-collapse table-auto w-full text-sm'>
          <thead className='dark:bg-slate-800'>
            <tr>
              <Th text='Title' />
              <Th text='Description' />
              <Th text='Status' />
              <Th text='Priority' />
            </tr>
          </thead>

          <tbody className='bg-white dark:bg-slate-800'>
            {
              tickets.map((ticket: any) => (
                <tr>
                  <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{ticket.title}</td>
                  <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{ticket.description}</td>
                  <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{ticket.status}</td>
                  <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{ticket.priority}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tickets