import Image from 'next/image'
import { NewNoteProps } from '../types'

function NewNote({ setIsOpen }: NewNoteProps) {
    const handleClick = () => setIsOpen(true)

    return (
        <button
            onClick={handleClick}
            className="min-w-[130px] max-[385px]:min-w-fit flex items-center gap-2 px-4 py-2 rounded-md bg-black cursor-pointer"
        >
            <Image
                src="/add-white.svg"
                width={20}
                height={20}
                alt="add"
                className="pointer-events-none select-none"
            />
            <span className='text-white whitespace-nowrap max-[376px]:hidden flex select-none'>
                New Note
            </span>
        </button>
    )
}

export default NewNote