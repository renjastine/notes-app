import Image from "next/image"
import Tags from "./Tags"

function Note() {
    return (
        <div className='bg-red-400 rounded-lg pl-2 shadow-sm'>
            <div className="bg-white w-full h-full min-h-[130px] p-5 rounded-r-lg">
                <div className="flex justify-end mb-5">
                    <div className="p-1.5 border border-red-400 rounded-sm">
                        <Image
                            className=" pointer-events-none select-none"
                            src={"delete.svg"}
                            width={15}
                            height={15}
                            alt="delete"
                        />
                    </div>
                </div>
                <article className='text-black/50 max-h-15 overflow-y-hidden'>No Content</article>
                <div className="mt-5 flex justify-between flex-wrap items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                        <Tags />
                    </div>
                    <div className="text-sm text-black/50">
                        Nov 23, 2025
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note