import Image from 'next/image'

function NewNote() {
    return (
        <button className="min-w-[130px] max-[385px]:min-w-fit flex items-center gap-2 px-4 py-2 rounded-md bg-black">
            <Image
                src={"add-white.svg"}
                width={20}
                height={20}
                alt="add"
            />
            <span className='text-white w-18 max-[376px]:hidden flex'>
                New Note
            </span>
        </button>
    )
}

export default NewNote