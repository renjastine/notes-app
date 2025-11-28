import Image from "next/image";
import { ChangeEvent } from "react";

type SearchBarProps = {
    search: string
    setSearch: (val: string) => void
}

function SearchBar({ search, setSearch }: SearchBarProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <div className="flex items-center gap-1 py-1 px-4 rounded-md bg-gray-200 w-full">
            <Image
                className="opacity-50 pointer-events-none select-none"
                src={"search.svg"}
                width={20}
                height={20}
                alt="search"
            />
            <input
                className="focus:outline-0 text-md py-1 w-full select-none"
                value={search}
                onChange={handleChange}
                type="text"
                placeholder="Search notes..."
            />
        </div>
    )
}

export default SearchBar