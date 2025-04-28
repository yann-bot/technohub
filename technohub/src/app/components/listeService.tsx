// ListeServices.tsx
import { FaTools, FaBolt, FaWater, FaLaptop, FaWrench, FaTruckMoving, FaPaintRoller, FaFan, FaSolarPanel, FaPlug } from "react-icons/fa";
import { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5"; // Icônes pour les flèches
import clsx from "clsx";

const services = [
    { nom: "Électricien", icone: <FaBolt /> },
    { nom: "Plombier", icone: <FaWater /> },
    { nom: "Réparation PC", icone: <FaLaptop /> },
    { nom: "Maintenance", icone: <FaTools /> },
    { nom: "Mécanique Auto", icone: <FaWrench /> },
    { nom: "Déménagement", icone: <FaTruckMoving /> },
    { nom: "Peinture", icone: <FaPaintRoller /> },
    { nom: "Climatisation", icone: <FaFan /> },
    { nom: "Solaire", icone: <FaSolarPanel /> },
    { nom: "Installation Électrique", icone: <FaPlug /> },
    { nom: "Électricien", icone: <FaBolt /> },
    { nom: "Plombier", icone: <FaWater /> },
];

export default function ListeServices() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    return (
        <div className="overflow-hidden  w-full bg-rounded-[100px] relative">
            <div className="flex items-center gap-5 ">

                {/* Bouton Gauche */}
                <button
                    onClick={scrollLeft}
                    className=" bg-white w-30 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition"
                >
                    <IoChevronBack size={24} />
                </button>

                {/* Carrousel */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto space-x-6 scrollbar-hide"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="min-w-[120px] flex flex-col items-center  pt-4 hover:scale-105 transition-transform duration-300"
                        >
                            <div className={clsx(
                                "text-4xl text-white  rounded-full mb-2",
                                "bg-orange-500 hover:bg-orange-700 transition"
                            )}>
                                {service.icone}
                            </div>
                            <h3 className="text-center text-sm font-semibold">
                                {service.nom}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Bouton Droit */}
                <button
                    onClick={scrollRight}
                    className=" bg-white w-30  h-12 rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition"
                >
                    <IoChevronForward size={24} />
                </button>

            </div>
        </div>
    );
}
