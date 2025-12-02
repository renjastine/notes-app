import Image from "next/image";
import { ChangeEvent } from "react";
import { SearchBarProps } from "../types";

function SearchBar({ search, setSearch }: SearchBarProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)
    
    return (
        <div className="flex items-center gap-1 py-1 px-4 rounded-md bg-gray-200 w-full">
            <Image
                src={"search.svg"}
                width={20}
                height={20}
                alt="search"
                className="opacity-50 pointer-events-none select-none"
            />
            <input
                value={search}
                onChange={handleChange}
                type="text"
                placeholder="Search notes..."
                className="focus:outline-0 text-md py-1 w-full select-none"
            />
        </div>
    )
}

export default SearchBar