import { useSocket } from "../hooks/useSocket"

const Formulario = () => {

  const { handleChange, handleSubmit, message } = useSocket()

  return (
    <div className="h-screen">
      <a href="#name">
        <h1 className=" text-center font-extrabold bg-gris-claro rounded-full cursor-pointer hover:bg-gris-oscuro">Ticket Admin</h1>
      </a>
      <div
        className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
      >
        <p>&nbsp;New Ticket&nbsp;</p>
      </div>
      <div className="container mx-auto w-2/4">
        <form className="flex flex-col ">

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

          <div className="text-center lg:text-left flex justify-center">
            <button type='submit' onClick={handleSubmit}>Send</button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Formulario