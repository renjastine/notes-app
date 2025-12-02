import Image from "next/image"
import { DropdownItemProps } from "../types";

function DropdownItem({ itemName, selectedSort, setSelectedSort }: DropdownItemProps) {
    const itemText = itemName === "new" ? "Newest First" : "Oldest First";
    const isSelected = selectedSort === itemName;

    const handleClick = () => setSelectedSort(itemName)

    return (
        <div
            onClick={handleClick}
            className={`p-2 py-1 rounded-md flex justify-between select-none cursor-pointer 
                ${isSelected ? "bg-gray-200" : ""}
                `}
        >
            <span>{itemText}</span>
            {isSelected && (
                <Image
                    className="opacity-50"
                    src={"/check.svg"}
                    width={15}
                    height={15}
                    alt="search"
                />
            )}
        </div>
    );
}

export default DropdownItem