import Image from "next/image";
import DropdownItem from "./DropdownItem";

function DropdownSort() {
    return (
        <div className="relative">
            <div
                className='font-light text-black/70 flex justify-between gap-15 px-4 py-2 w-[200px] rounded-sm bg-gray-200 mb-1 cursor-pointer select-none'
            >
                Newest First
                <Image
                    className="opacity-50 pointer-events-none select-none w-auto h-auto"
                    src={"move-down.svg"}
                    width={10}
                    height={10}
                    alt="search"
                />
            </div>
            <div className="bg-white w-[200px] rounded-md shadow-sm p-1 absolute z-1 hidden">
                <DropdownItem itemName="new" />
                <DropdownItem itemName="old" />
                <DropdownItem itemName="atoz" />
                <DropdownItem itemName="ztoa" />
            </div>
        </div>
    )
}

export default DropdownSort