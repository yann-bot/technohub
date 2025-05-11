import clsx from "clsx";
import Card from "./technoCard";

const technicien = [
    {
        nomComplet: "Yann Ouafete",
        adresse: "221B Baker Street",
        specialite: "Detectif",
        photo: "/yann.png",

        avis: 57,

    },
    {
        nomComplet: "Yann Ouafete",
        adresse: "221B Baker Street",
        specialite: "Detectif",
        photo: "/yann.png",

        avis: 57,

    },
    {
        nomComplet: "Yann Ouafete",
        adresse: "221B Baker Street",
        specialite: "Detectif",
        photo: "/yann2.jpg",

        avis: 57,

    },
    {
        nomComplet: "Yann Ouafete",
        adresse: "221B Baker Street",
        specialite: "Detectif",
        photo: "/yann.png",

        avis: 57,

    },
    {
        nomComplet: "Yann Ouafete",
        adresse: "221B Baker Street",
        specialite: "Detective",
        photo: "/yann2.jpg",

        avis: 57,

    },
    {
        nomComplet: "Yann Ouafete",
        adresse: "221B Baker Street",
        specialite: "Electricien",
        photo: "/yann.png",
        text: "J'aime resoudre les problèmes",
        avis: 57,

    },

]


export default function TechGrille() {
    return(
        <div className={clsx("flex flex-col items-center justify-between")}>
            <h2 className="text-3xl font-bold mb-6">Techniciens qualifiés à votre écoute</h2>
            <div className={clsx("grid  grid-cols-3 mt-5 gap-10 ")}>
                {technicien.map((technicien, index) => (
                    <Card  key={index}
                           nomComplet={technicien.nomComplet}
                           avis={34}
                           adresse={technicien.adresse}
                           specialite={technicien.specialite}
                           photo={technicien.photo}
                    />
                ))
                }
            </div>
        </div>
    )
}