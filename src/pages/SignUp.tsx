import { useRef } from "react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";

const SignUp = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signUp(){
        console.log("function is called")
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        try{
            console.log(username)
            console.log(password)
            await axios.post(BACKEND_URL + "/api/v1/signup",{
                username : username,
                password: password
            })
            console.log('User signed up')
        }catch(err){
            console.log("Error in the singup",err)
        }
    }

    return (
        <div className="w-full h-full bg-fuchsia-500 flex justify-center items-center">
            <div className=" flex flex-col bg-slate-100 p-2 gap-2 rounded-md">
                <Input ref={usernameRef} placeholder="Username"/>
                <Input ref={passwordRef} placeholder="passoword"/>
                <span className="p-1"></span>
                <Button variant="secondary" text="Submit" size="md" onClick={signUp}/>                
            </div>
        </div>

    )
}

export default SignUp