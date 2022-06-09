import { useSocket } from "../../hooks/useSocket"


const Button = () => {

  const { handleSubmit } = useSocket()

  return (

    <div className="text-center lg:text-left flex justify-center">
      <button
        type='submit'
        onClick={handleSubmit}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Send
      </button>

    </div>
  )
}

export default Button