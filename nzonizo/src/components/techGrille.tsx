import clsx from "clsx";
import Card from "./technoCard";
import Technicien from "@/data/techniciensVedette";


const technicien = Technicien;



export default function TechGrille() {
    return(
        <div className={clsx("flex flex-col items-center justify-between")}>
            <h2 className="text-3xl font-bold mb-6">Techniciens qualifiés à votre écoute</h2>
            <div className={clsx("grid  grid-cols-3 mt-5 gap-10 ")}>
                {technicien.map((technicien, index) => (
                    <Card  key={index}
                           id = {technicien.id}
                           nomComplet={technicien.nomComplet}
                           avis={34}
                           adresse={technicien.adresse}
                           specialite={technicien.specialite}
                           photo={technicien.photo}
                           sousSpecialite={technicien.sousSpecialites}
                           note={technicien.note}
                           localisation={technicien.localisation}
                    />
                ))
                }
            </div>
        </div>
    )
}