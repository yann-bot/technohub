"use client"

import ScrollNav from "@/components/scrollNav";
import clsx from "clsx";
import Link from "next/link";
import ProfilForm from "@/components/profilForm";

export default function DevenirTechnicien() {
    return (
        <div className="flex flex-col gap-20 ">
            <ScrollNav />
            <section className={clsx(" flex   justify-center items-center gap-20 bg-orange-50 w-full")}>
             <div className={clsx("w-1/2 ")}>
                 <Link href='/'   ><div className={clsx('  font-sans md:text-2xl text-orange-500 font-bold')}> NzoniZo </div></Link>
                 <div className="flex flex-col mt-15 gap-10 tracking-wide leading-tight">
                     <h1 className="text-4xl font-sans font-bold"> Devenez technicien, vendez vos compétences !</h1>
                     <div className="flex flex-col gap-3 font-normal ">
                         <div className=" ">
                             Bienvenue sur la première plateforme de mise en relation entre clients et techniciens en République centrafricaine !
                             Chaque jour, des particuliers et des entreprises trouvent facilement un professionnel qualifié pour leurs travaux et réparations.
                         </div>

                         <div>
                             🧰 Électricité, plomberie, climatisation, réparation d’appareils électroniques, maintenance informatique, construction, et bien plus encore...
                             🔧 Des dizaines de métiers techniques disponibles à Bangui et partout en RCA.
                         </div>

                         <div>
                             🙌 Choisissez un technicien de confiance, près de chez vous
                             💬 Discutez directement avec lui pour planifier votre intervention
                             💸 Comparez les prix et sélectionnez la solution qui vous convient
                         </div>

                         <div>
                             👨‍🔧 Vous êtes technicien ?
                             Créez gratuitement votre profil, fixez vos tarifs, organisez votre emploi du temps et recevez des demandes de clients.
                             Qu&#39;importe votre spécialité — autodidacte, diplômé, expérimenté — votre savoir-faire est précieux.
                         </div>
                     </div>
                 </div>

             </div>
                <ProfilForm />
            </section>
            <section className="flex flex-col items-center">
                <h1 className="text-4xl font-sans font-bold">Rejoingnez une grande famille</h1>
            </section>
        </div>
    )
}