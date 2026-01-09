

import { useRef, useState } from "react";
import { CloseButton } from "../../icons/Close";
import axios from "axios";
import Button from "./Button";
import Input from "./Input";
import { BACKEND_URL } from "../../config";

interface componentprops{
    open : boolean, 
    onClose: () => void
}
enum ContentType {
    Youtube = "Youtube" ,
    Twitter = "Twitter"
}
export function CreateComponentModal({open, onClose}:componentprops ){
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const [type, setType] = useState(ContentType.Youtube)

    async function handleSubmit(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        console.log("handleSubmit is called")
        try{
            await axios.post(`${BACKEND_URL}/api/v1/content`,{
                title,
                link,
                type
            },{
                headers: {
                    "Authorization" : localStorage.getItem("token")
                }
            })
            alert("Content added successfully")
        }catch(err){
            console.log("unable to add content",err);
        }
    }

    return (
        <div>
        {open && 
        <div className="w-screen h-screen bg-slate-500 fixed left-0 top-0 opacity-95 flex justify-center items-center">
            <div className="bg-white opacity-100 p-3 flex flex-col gap-1 rounded-md">
                <div className="flex justify-end pr-1 cursor-pointer" onClick={onClose} >
                    <CloseButton size="lg"/>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Input ref={titleRef} placeholder="Title"/>
                    <Input ref={linkRef} placeholder="Link"/>
                </div>
                <div className="flex justify-center gap-5">
                    <Button text="Youtube" variant={type === 'Youtube' ? "secondary" : "primary"} size="sm" onClick={()=>{setType(ContentType.Youtube)}}/>
                    <Button text="Twitter" variant={type === "Twitter" ? "secondary": "primary"} size="sm" onClick={()=>{setType(ContentType.Twitter)}}/>
                </div>
                <div className="flex justify-center mt-3">
                    <Button variant="secondary" text="Submit" size="md" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
        }
    </div>
    )
    
}

