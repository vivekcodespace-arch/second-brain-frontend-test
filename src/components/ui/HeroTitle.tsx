import type { ReactElement } from "react"

interface heroProps{
    icon: ReactElement,
    text: string
}

export function HeroTitle({icon, text}: heroProps){
    return (
        <div className="flex gap-2 text-4xl items-center w-[95%] mb-5 mt-3">
            {icon} {text}
        </div>
    )
}