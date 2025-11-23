import Image from 'next/image'

function NewNote() {
    return (
        <button className="min-w-[130px] max-[385px]:min-w-fit flex items-center gap-2 px-4 py-2 rounded-md bg-black cursor-pointer">
            <Image
                className="pointer-events-none select-none"
                src="add-white.svg"
                width={20}
                height={20}
                alt="add"
            />
            <span className='text-white whitespace-nowrap max-[376px]:hidden flex select-none'>
                New Note
            </span>
        </button>
    )
}

export default NewNote