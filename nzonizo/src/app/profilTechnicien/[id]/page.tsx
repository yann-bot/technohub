import Link from 'next/link';
import techniciens from '@/data/techniciensVedette';
import { notFound } from 'next/navigation';
import NavSimple from '@/components/navSimple'
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";

interface Props  {
    params:{
        id: string
    };

}

export default  async function profilTechnicien(props: Props) {
    const params = await props.params
    const id = parseInt(params.id);
    if(isNaN(id)) return notFound();

    const technicien = techniciens.find((technicien) => technicien.id === id );
    if (!technicien) return notFound();


    return (
        <div className="">
            <NavSimple />
            <div className="mt-30 m-10 ">
               <Link href=""  className="text-orange-500 flex items-center gap-1 text-xl font-serif font-bold tracking-wide hover:underline"><GoArrowLeft className="text-3xl"/>  Retour au technicien</Link>
                <section className="flex mt-7 ">
                    <div className="w-2/3 h-screen flex flex-col gap-5 ">
                          <div className=" flex flex-col relative bg-white border border-gray-300 shadow-xl rounded-2xl w-full h-80">
                                <div className="bg-orange-500 rounded-t-2xl w-full h-25"></div>
                                <div className=" rounded-full w-30 h-30 absolute left-10 z-20 top-10">

                                        <Image
                                            src={technicien.photo}
                                            alt={technicien.nomComplet}
                                            fill
                                            className="rounded-full"
                                        />
                                </div>


                          </div>
                          <div>

                          </div>
                          <div>

                          </div>
                    </div>
                    <div>

                    </div>
                </section>
            </div>
        </div>
    )
}