const Input = ({ref ,placeholder}:{ref:any, placeholder: string}) => {
    return <input
    ref={ref}
    placeholder={placeholder}
    className="px-4 py-2 text-sm border border-gray-300 rounded-md focus-within:outline-dark-purple"
    type="text"
    />
}

export default Input

