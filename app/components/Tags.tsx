import { TagsProps } from "../types"

const filterStyle = "border font-bold"
const noteStyle = "bg-gray-300"

function Tags({ tag, clickable, selectedTags, setSelectedTags }: TagsProps) {
    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        setSelectedTags?.(tag)
    }

    const isSelected = selectedTags?.includes(tag)

    return (
        <span
            id={tag}
            onClick={e => handleClick(e)}
            className={`text-black/70 text-sm px-3 pt-1.5 pb-1 rounded-xl h-6 flex justify-center items-center select-none 
                ${clickable ? "cursor-pointer " + filterStyle : "pointer-events-none " + noteStyle}
                ${isSelected ? "bg-black text-white" : ""}
                `}
        >
            {tag}
        </span>
    )
}

export default Tags