import React from 'react'

const Formulario = ({ handleChange, handleSubmit, message }: any) => {
  return (
    <form>
      <input
        type="text"
        placeholder='title'
        name='title'
        onChange={(e) => handleChange(e)}
        value={message.title}
      />

      <input
        type="text"
        placeholder='description'
        name='description'
        onChange={(e) => handleChange(e)}
        value={message.description}
      />

      <input
        type="text"
        placeholder='status'
        name='status'
        onChange={(e) => handleChange(e)}
        value={message.status}
      />

      <input
        type="text"
        placeholder='priority'
        name='priority'
        onChange={(e) => handleChange(e)}
        value={message.priority}
      />

      <button type='submit' onClick={handleSubmit}>Send</button>

    </form>
  )
}

export default Formulario