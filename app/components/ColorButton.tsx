import { ColorButtonProps } from "../types";

function ColorButton({ color, selectedColor, setSelectedColor }: ColorButtonProps) {
    const isSelected = selectedColor === color;

    const handleClick = () => setSelectedColor(color)

    const baseClasses =
        "cursor-pointer w-8 h-8 rounded-2xl focus:outline-2 focus:outline-offset-2"

    const colorClasses = {
        bg: `bg-${color}-500`,
        focus: `focus:outline-${color}-400`,
        outline: `outline-${color}-500 outline-2 outline-offset-2`
    };

    return (
        <button
            type='button'
            onClick={handleClick}
            className={` ${baseClasses} ${colorClasses.bg} ${colorClasses.focus} ${isSelected ? colorClasses.outline : ""}`}
        />
    );
}

export default ColorButton