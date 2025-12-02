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

    return `${month} ${day}, ${year}`;
}

function Note({
    id,
    content,
    tags,
    createdAt,
    color,
    setIsDeleteOpen,
    setDeleteById,
    setIsOpen,
    setId
}: NotesProps) {

    const colorMap: Record<string, string> = {
        red: "bg-red-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        green: "bg-green-500",
        cyan: "bg-cyan-500",
        blue: "bg-blue-500",
        fuchsia: "bg-fuchsia-500",
        gray: "bg-gray-500",
        violet: "bg-violet-500"
    };

    const handleClickDelete = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsDeleteOpen(true)
        setDeleteById(id)
    }

    const handleClick = () => {
        setIsOpen(true)
        setId(id)
    }

    return (
        <div className={`rounded-lg pl-2 shadow-sm ${colorMap[color]}`}>
            <div
                onClick={handleClick}
                className="bg-white w-full h-full min-h-[130px] p-5 rounded-r-lg"
            >
                <div className="flex justify-end mb-5">
                    <div
                        onClick={handleClickDelete}
                        className="p-1.5 border border-red-400 rounded-sm cursor-pointer select-none"
                    >
                        <Image
                            src={"/delete.svg"}
                            width={15}
                            height={15}
                            alt="delete"
                            className="pointer-events-none select-none w-auto h-auto"
                        />
                    </div>
                </div>
                <article
                    className='text-black/50 max-h-15 overflow-y-hidden'
                    dangerouslySetInnerHTML={{ __html: content }}
                />
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