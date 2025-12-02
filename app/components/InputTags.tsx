import { InputTagsProps } from "../types"

function InputTags({ tag, inputTags, setInputTags }: InputTagsProps) {
    const handleRemove = () => setInputTags(inputTags.filter(t => t !== tag))

    return (
        <div>
            <span className='flex items-center gap-1 bg-gray-300 text-xs font-semibold px-2 py-1 rounded-xl w-fit'>
                {tag}
                <img
                    src="/x-close.svg"
                    alt="remove tag"
                    onClick={handleRemove}
                    className='w-3 cursor-pointer select-none'
                />
            </span>
        </div>
    )
}

export default InputTags