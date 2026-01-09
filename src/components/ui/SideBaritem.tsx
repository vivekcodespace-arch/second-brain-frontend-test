import type { ReactElement } from "react"

interface itemProps{
    icon: ReactElement,
    text: string
}

export function SidebarItems({icon, text}:itemProps) {
    return (
        <div className="p-2 flex gap-3  items-center  w-[95%] m-1 cursor-pointer hover:bg-gray-300 transition-all duration-150 rounded-md">
            {icon} {text}
        </div>
    )
}