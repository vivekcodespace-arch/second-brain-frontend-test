import { DeleteIcon } from "../../icons/DeleteIcon"
import { ShareIcon } from "../../icons/ShareIcon"
import { getEmbedurl } from "../../utils/youtube"
interface CardProps {
    title: string,
    link: string,
    type: "Twitter" | "Youtube"
}

const Card = ({ title, link, type }: CardProps) => {
    const embedurl= getEmbedurl(link, type)
    
    return (

        <div className=" bg-white rounded-md p-3 outline-1 outline-slate-900 max-w-72 flex flex-col ">
            <div className="flex justify-between w-full items-center">
                <div className="flex items-center gap-3" >
                    <ShareIcon size="lg" />
                    <p className="text-2xl">{title}</p>
                </div>
                <div className="flex gap-2">
                    <div>
                        <a href={link} target="_blank">
                            <ShareIcon size="lg" />
                        </a>
                    </div>

                    <DeleteIcon size="lg" />
                </div>

            </div>
            {/* https://www.youtube.com/watch?v=mClF6mJV5xM */}
            {type === "Youtube" &&  embedurl &&
                <iframe
                    className="w-full"
                    src={embedurl}
                    title="youtube link"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            }

            {type === "Twitter" && embedurl &&
                <blockquote className="twitter-tweet">
                    <a href ={embedurl}></a>
                </blockquote>
            }
        </div>


    )
}

export default Card
