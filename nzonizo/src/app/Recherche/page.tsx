
"use client"

import {useState} from "react";
import techniciensData from "@/data/techniciensData";
import clsx from "clsx";
import Card from "@/components/technoCard";



export default function RecherchePage() {

    const [filtres, setFiltres] = useState({
        sousSpecialite: "",
        localisation: "",
        note: 0,
    });

    const [page, setPage] = useState(0);
    const techniciensParPage = 6;

    const techniciensFiltres = techniciensData
        .filter(t =>
            (filtres.sousSpecialite ? t.sousSpecialites.includes(filtres.sousSpecialite) : true) &&
            (filtres.localisation ? t.localisation === filtres.localisation : true) &&
            (filtres.note ? t.note >= filtres.note : true)
        );

    const techniciensAffiches = techniciensFiltres.slice(
        page * techniciensParPage,
        (page + 1) * techniciensParPage
    );



    return (
        <div className=" mt-25 flex flex-col m-10 gap-5   ">
              <h1 className="text-4xl mt-10 font-mono   font-bold">Des Techniciens à proximité</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <select onChange={e => setFiltres({ ...filtres, sousSpecialite: e.target.value })}>
                    <option value="">Toutes les sous-spécialités</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="TV">TV</option>
                </select>

                <select onChange={e => setFiltres({ ...filtres, localisation: e.target.value })}>
                    <option value="">Toutes les localisations</option>
                    <option value="Bangui">Bangui</option>
                    <option value="Berbérati">Berbérati</option>
                </select>

                <select onChange={e => setFiltres({ ...filtres, note: Number(e.target.value) })}>
                    <option value={0}>Toutes les notes</option>
                    <option value={4}>4+ étoiles</option>
                    <option value={3}>3+ étoiles</option>
                </select>
            </div>

            <div className="relative">
                <div className={clsx("grid  grid-cols-3 mt-5 gap-10 ")}>
                    {techniciensAffiches.map((technicien, index) => (
                        <Card  key={index}
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

          œ      {/* Boutons navigation */}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 0}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        ◀ Précédent
                    </button>

                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={(page + 1) * techniciensParPage >= techniciensFiltres.length}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Suivant ▶
                    </button>
                </div>
            </div>
        </div>
    )
}