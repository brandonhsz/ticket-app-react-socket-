interface IProps {
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: any) => void;
  value: string;
}

const Input = ({ type, placeholder, name, onChange, value }: IProps) => {



  return (
    <div className="mb-6 relative">
      <input
        className="form-control text-white bg-gris-claro block w-full px-4 py-3 text-xl font-normal bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-gris-oscuro focus:border-blue-900 focus:outline-none peer"
        type={type}
        placeholder={' '}
        name={name}
        id={name}
        onChange={(e) => onChange(e)}
        value={value}
      />

      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {placeholder}
      </label>
    </div>
  )
}

export default Input