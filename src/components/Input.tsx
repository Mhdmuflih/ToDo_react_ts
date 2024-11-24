type Input = {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({inputValue, setInputValue}: Input) => {
    return (
        <input type="text"
            value={inputValue}
            className='w-full p-2 rounded-sm border-2 border-black'
            onChange={(event) => setInputValue(event.target.value)}
        />
    )
}

export default Input;