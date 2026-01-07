import { ShareIcon } from "../../icons/ShareIcon"

const Card = () => {
    return (

        <div className=" bg-white rounded-md p-3 outline-1 outline-slate-900 max-w-72 flex flex-col ">
            <div className="flex justify-between w-full items-center">
                <div className="flex items-center gap-2" >
                    <ShareIcon />
                    <p className="text-xs">Project ideas</p>
                </div>
                <div className="flex gap-1">
                    <ShareIcon />
                    <ShareIcon />
                </div>
            </div>

            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Any claude alternative? <a href="https://t.co/VLs5gopZJZ">pic.twitter.com/VLs5gopZJZ</a></p>&mdash; 𝐑.𝐎.𝐊 👑 (@r0ktech) <a href="https://twitter.com/r0ktech/status/2008842562027799033?ref_src=twsrc%5Etfw">January 7, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>

            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">A way to increase jacket size using an extra zip <br/> <a href="https://t.co/mngp1S68Nt">pic.twitter.com/mngp1S68Nt</a></p>&mdash; Science girl (@sciencegirl) <a href="https://twitter.com/sciencegirl/status/2008623329184235668?ref_src=twsrc%5Etfw">January 6, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            
        </div>


    )
}

export default Card
