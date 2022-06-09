import { useSocket } from "../../hooks/useSocket"
import Button from "./Button"
import Input from "./Input"

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



          <Input
            type="text"
            placeholder='title'
            name='title'
            onChange={(e) => handleChange(e)}
            value={message.title}
          />

          <Input
            type="text"
            placeholder='description'
            name='description'
            onChange={(e) => handleChange(e)}
            value={message.description}
          />

          <Input
            type="text"
            placeholder='status'
            name='status'
            onChange={(e) => handleChange(e)}
            value={message.status}
          />

          <Input
            type="text"
            placeholder='priority'
            name='priority'
            onChange={(e) => handleChange(e)}
            value={message.priority}
          />

          <Button />

        </form>
      </div>
    </div>
  )
}

export default Formulario