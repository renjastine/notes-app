import Image from "next/image";
import DropdownItem from "./DropdownItem";
import { useEffect, useRef, useState } from "react";
import { DropdownSortProps } from "../types";


function DropdownSort({ selectSort, setSelectSort }: DropdownSortProps) {
    const dropdown = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (!dropdown.current?.contains(e.target as Node))
                setIsOpen(false)
        }

        document.addEventListener("click", handleOutside)
        return () => document.removeEventListener("click", handleOutside);
    }, [])

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const getSortText = (sort: string) => (sort === "new" ? "Newest First" : "Oldest First");

    return (
        <div className="relative">
            <div
                ref={dropdown}
                onClick={toggleDropdown}
                className='font-light text-black/70 flex justify-between gap-15 px-4 py-2 w-[200px] rounded-sm bg-gray-200 mb-1 cursor-pointer select-none'
            >
                <span>{getSortText(selectSort)}</span>
                <Image
                    src={"/move-down.svg"}
                    width={10}
                    height={10}
                    alt="Dropdown Arrow"
                    className="opacity-50 pointer-events-none select-none w-auto h-auto"
                />
            </div>

            {isOpen && (
                <div className="bg-white w-[200px] rounded-md shadow-sm p-1 absolute z-1">
                    <DropdownItem
                        selectedSort={selectSort}
                        setSelectedSort={setSelectSort}
                        itemName="new"
                    />
                    <DropdownItem
                        selectedSort={selectSort}
                        setSelectedSort={setSelectSort}
                        itemName="old"
                    />
                </div>
            )}
        </div>
    )
}

export default DropdownSort