type ColorButtonProps = {
    color: string
    selectedColor: string
    setSelectedColor: (val: string) => void
}

function ColorButton({ color, selectedColor, setSelectedColor }: ColorButtonProps) {
    const isSelected = selectedColor === color;

    const handleClick = () => {
        setSelectedColor(color)
    }

    return (
        <button
            onClick={handleClick}
            type='button'
            className={`
                cursor-pointer w-8 h-8 rounded-2xl bg-${color}-500 focus:outline-2 focus:outline-${color}-400 focus:outline-offset-2
                ${isSelected ? `outline-2 outline-offset-2 outline-${color}-500` : ``}
                `}
        >
        </button>
    )
}

export default ColorButton