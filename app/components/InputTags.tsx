import React from 'react'

type InputTagsProps = {
    tag: string
    inputTags: string[]
    setInputTags: (val: string[]) => void
}

function InputTags({ tag, inputTags, setInputTags }: InputTagsProps) {
    const handleClick = () => {
        const removeTag = [...inputTags].filter(t => t !== tag)
        setInputTags(removeTag)
    }

    return (
        <div>
            <span
                className='flex gap-1 bg-gray-300 text-xs font-semibold px-2 py-1 rounded-xl w-fit'
            >
                {tag}
                <img
                    onClick={handleClick}
                    className='w-3 cursor-pointer select-none'
                    src="x-close.svg"
                    alt="close"
                />
            </span>
        </div>
    )
}

export default InputTags