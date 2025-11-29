import Image from "next/image"

type DropdownItemProps = {
    itemName: "new" | "old"
    selectedSort: string
    setSelectedSort: (val: string) => void
}

function DropdownItem({ itemName, selectedSort, setSelectedSort }: DropdownItemProps) {
    const itemText = itemName === "new" ? "Newest First" : "Oldest First"

    const handleClick = () => {
        setSelectedSort(itemName)
    }

    const isSelected = selectedSort === itemName;

    return (
        <div
            onClick={handleClick}
            className={`
                p-2 py-1 rounded-md flex justify-between select-none cursor-pointer
                ${isSelected ? "bg-gray-200" : ""}
                `}
        >
            {itemText}
            {isSelected &&
                <Image
                    className="opacity-50"
                    src={"check.svg"}
                    width={15}
                    height={15}
                    alt="search"
                />}
        </div>
    )
}

export default DropdownItem