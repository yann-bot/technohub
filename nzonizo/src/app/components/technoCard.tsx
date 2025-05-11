
import clsx from "clsx";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {  FaLocationDot  } from "react-icons/fa6";



interface Props {
    nomComplet: string,
    photo: string
    adresse: string,
    specialite: string,
    avis: number,

}

export default function Card({ nomComplet, adresse, specialite,  avis,photo }: Props) {
    return (
        <div className=" bg-white overflow-hidden  w-[300px] mx-auto transform transition duration-300 hover:shadow-lg hover:-translate-y-1 border border-white hover:border-gray-200">
            <div className="relative w-full h-72 overflow-hidden">
                <Image src={photo} alt="yann" fill className="object-cover rounded-2xl transition-transform duration-300 hover:scale-105" />
                <div className="absolute bottom-4 left-4 text-white bg-black/50 p-2 rounded">
                    <h2 className="text-xl font-bold">{nomComplet}</h2>
                    <p className="text-sm flex items-center gap-2">
                        <FaLocationDot />
                        {adresse}
                    </p>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <div className="font-semibold text-indigo-600">{specialite}</div>
                <div className="flex text-yellow-300 items-center gap-1">
                    <FaStar/>
                    <div className={clsx("flex items-center")}>
                        <span className="text-black">5 </span>
                        <span className="text-black text-sm ml-2">({avis} avis)</span>
                    </div>

                </div>
                <div className="text-sm text-gray-700  flex  gap-2">
                    <button className="p-2 pl-6 pr-6  border hover:bg-orange-100  hover:text-black border-orange-500 text-orange-500 rounded-sm  ">Contacter</button>
                    <button className="p-2 pl-6 pr-6 text-white bg-orange-500 rounded-sm hover:bg-orange-700 ">Voir le profil</button>
                </div>
            </div>
        </div>
    );
}
