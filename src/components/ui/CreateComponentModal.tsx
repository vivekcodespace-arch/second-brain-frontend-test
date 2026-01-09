import { CloseButton } from "../../icons/Close";
import Button from "./Button";

export function CreateComponentModal({open, onClose}){
    return (
        <div>
        {open && 
        <div className="w-screen h-screen bg-slate-500 fixed left-0 top-0 opacity-90 flex justify-center items-center">
            <div className="bg-white opacity-100 p-3 flex flex-col gap-1 rounded-md">
                <div className="flex justify-end pr-1 cursor-pointer" onClick={onClose} >
                    <CloseButton size="lg"/>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Input placeholder="Title"/>
                    <Input placeholder="Link"/>
                </div>
                <div className="flex justify-center mt-3">
                    <Button variant="secondary" text="Submit" size="md"/>
                </div>
            </div>
        </div>
        }
    </div>
    )
    
}

function Input({onChange,placeholder}:{onChange: ()=>void, placeholder: string}){
    return <input
    placeholder={placeholder}
    className="px-4 py-2 text-sm border border-gray-300 rounded-md focus-within:outline-dark-purple"
    type="text"
    onChange={onChange}

    />
}