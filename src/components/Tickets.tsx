import React from 'react'
import Td from './Table/Td'
import Th from './Table/Th'

const Tickets = ({ tickets }: any) => {
  return (
    <div className='relative rounded-xl overflow-auto'>
      <div className='shadow-sm overflow-hidden my-8 border-2'>
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
                  <Td ticket={ticket} />
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