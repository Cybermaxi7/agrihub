import React from 'react'
import {BsStack} from "react-icons/bs";

interface AfCardsProps {
    title: string;
    paragraph: string;
    icon: typeof BsStack;
    key: number;
}

const AfCards: React.FC<AfCardsProps> = ({title, paragraph, icon: Icon, key}) => {
    return (
        <div key={key} className={"relative border transit border-green-500 rounded w-full h-full p-6 hover:border-green-800 hover:border-2 transit shadow-md"}>
            <div className={"mt-5"}>
                <h3 className="text-sm lg:text-lg font-semibold font-heading mb-3 text-black ">{title}</h3>
                <p className="text-black text-xs md:text-sm leading-relaxed font-body">{paragraph}</p>
            </div>
            <div className={"absolute -top-5 left-6 bg-[#0A0620] rounded-full p-1 w-12 h-12 flex-center"}>
               <Icon className={"text-2xl"}/>

            </div>
        </div>
    )
}
export default AfCards
