import Image from "next/image";
import DropdownItem from "./DropdownItem";
import { useEffect, useRef, useState } from "react";

function DropdownSort() {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [selectSort, setSelectSort] = useState("new");
    const dropdown = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside);
    }, [])

    const handleClickOutside = (e: MouseEvent) => {
        if (!dropdown.current?.contains(e.target as Node)) setToggleDropdown(false)
    }

    const handleClick = () => {
        setToggleDropdown(toggleDropdown ? false : true)
    }

    return (
        <div className="relative">
            <div
                ref={dropdown}
                className='font-light text-black/70 flex justify-between gap-15 px-4 py-2 w-[200px] rounded-sm bg-gray-200 mb-1 cursor-pointer select-none'
                onClick={handleClick}
            >
                {selectSort === "new" ?
                    "Newest First" :
                    "Oldest First"}

                <Image
                    className="opacity-50 pointer-events-none select-none w-auto h-auto"
                    src={"move-down.svg"}
                    width={10}
                    height={10}
                    alt="search"
                />
            </div>
            {toggleDropdown &&
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
                </div>}
        </div>
    )
}

export default DropdownSort