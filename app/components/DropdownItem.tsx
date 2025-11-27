import Image from "next/image"
import { useState } from "react"

type DropdownItemProps = {
    itemName: "new" | "old" | "atoz" | "ztoa"
}

function DropdownItem({ itemName }: DropdownItemProps) {
    const [itemText, setItemText] = useState(() => {
        if(itemName === "old") return "Oldest First"
        if(itemName === "atoz") return "Title (A-Z)"
        if(itemName === "ztoa") return "Title (Z-A)"
        return "Newest First"
    });

    return (
        <div className="bg-gray-200 p-2 py-1 rounded-md flex justify-between">
            {itemText}
            <Image
                className="opacity-50"
                src={"check.svg"}
                width={15}
                height={15}
                alt="search"
            />
        </div>
    )
}

export default DropdownItem