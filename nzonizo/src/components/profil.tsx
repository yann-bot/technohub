
interface Technicien {
    id: number;
    nomComplet: string;
    specialite: string;
    sousSpecialites: string[];
    adresse: string;
    localisation: string;
    note: number;
    avis: number;
    photo: string;
    bio?: string;
}

type Props = {
    technicien: Technicien;
}


export default function Profil({technicien}: Props) {

    return (
        <div className="flex flex-col gap-2">
            <section className="">
                <div>Qui est {technicien.nomComplet} ? </div>
                <p>{technicien.nomComplet} {technicien.bio}</p>
            </section>
            <section>
                <div> Compétences </div>
                <ul className="flex">
                    {
                        technicien.sousSpecialites.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })
                    }
                </ul>
            </section>

        </div>
    )
}