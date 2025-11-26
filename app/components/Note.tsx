import Image from "next/image"
import Tags from "./Tags"
import { NotesProps } from "../types"

function toShortReadableDate(dateStr: string): string {
    const date = new Date(dateStr);

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}, ${day}, ${year}`;
}

function Note({ content, tags, createdAt }: NotesProps) {

    return (
        <div className='bg-red-400 rounded-lg pl-2 shadow-sm'>
            <div className="bg-white w-full h-full min-h-[130px] p-5 rounded-r-lg">
                <div className="flex justify-end mb-5">
                    <div className="p-1.5 border border-red-400 rounded-sm">
                        <Image
                            className=" pointer-events-none select-none w-auto h-auto"
                            src={"delete.svg"}
                            width={15}
                            height={15}
                            alt="delete"
                        />
                    </div>
                </div>
                <article className='text-black/50 max-h-15 overflow-y-hidden'>{content}</article>
                <div className="mt-5 flex justify-between flex-wrap items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => <Tags key={i} tag={tag} />)}
                    </div>
                    <div className="text-sm text-black/50">
                        {toShortReadableDate(createdAt)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note