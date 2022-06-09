import React from 'react'

interface IProps {
  text: string
}

const Th = ({ text }: IProps) => {
  return (
    <th className='border-x-2 border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center'>
      {text}
    </th>
  )
}

export default Th