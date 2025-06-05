"use client"


import Link from 'next/link';
import techniciens from '@/data/techniciensVedette';
import { notFound } from 'next/navigation';
import NavSimple from '@/components/navSimple'
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import NoteEtoile from '@/components/noteEtoile'
import {  FaLocationDot,FaWhatsapp   } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { BsTelephoneOutbound } from "react-icons/bs";
import {useState} from "react";
import React from "react";
import ProfilProfil from '@/components/profil';
import ProfilService from '@/components/profilServices';
import ProfilAvis from '@/components/profilavis';




export default function ProfilTechnicien({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const Id = parseInt(id );
    if (isNaN(Id)) return notFound();
    const technicien = techniciens.find((technicien) => technicien.id === Id);
    if (!technicien) return notFound();

    // eslint-disable-next-line react-hooks/rules-of-hooks
   const [activeTab, setActiveTab] =useState('Profil');

    const clickHandler = (tab: string) => setActiveTab(tab);


    return (
        <div className="">
            <NavSimple/>
            <div className="mt-30 m-10  flex flex-col ">
                <Link href="" className="text-orange-500 flex items-center gap-1 text-xl font-serif font-bold tracking-wide hover:underline"><GoArrowLeft className="text-3xl"/> Retour au technicien</Link>
                <section className="flex mt-7  ">
                    <div className="w-2/3  flex flex-col gap-5 ">
                        <div
                            className=" flex flex-col relative bg-white border border-gray-300 shadow-xl rounded-2xl w-full h-80">
                            <div className="bg-orange-500 rounded-t-2xl w-full h-25"></div>
                            <div className=" rounded-full w-30 h-30 absolute left-10 z-20 top-10">
                                <Image
                                    src={technicien.photo}
                                    alt={technicien.nomComplet}
                                    fill
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex w-full">
                                <div className=" flex flex-col flex-1  gap-2 p-18 pl-12 pb-0 w-fit">
                                    <div className="flex flex-col">
                                        <span className="text-2xl  font-bold">{technicien.nomComplet}</span>
                                        <span className="text-gray-400">{technicien.specialite}</span>
                                    </div>

                                    <span className="flex gap-1 items-center"><NoteEtoile
                                        note={technicien.note}/>({technicien.avis} avis)</span>
                                    <span className="flex items-center gap-2"> <FaLocationDot
                                        className="text-orange-500"/>{technicien.adresse}({technicien.localisation})</span>
                                </div>
                                <div className="w-1/2 flex flex-col justify-end items-center  gap-5 ">
                                    <div className="w-full flex items-center justify-center gap-3 ">
                                        <Link href="#"
                                              className=" bg-black  p-4 pt-2 pb-2 flex rounded-lg gap-2 items-center">
                                            <FaWhatsapp className="text-2xl text-green-400"/>
                                            <div className="text-orange-500">WhatsApp</div>
                                        </Link>
                                        <Link href="#"
                                              className="border text-orange-500 p-4 pt-2 pb-2 flex rounded-lg gap-2 items-center">
                                            <FiMessageSquare className="w-8"/>
                                            <div>Message</div>
                                        </Link>
                                    </div>
                                    <div className=" w-fit">
                                        <Link href="#"
                                              className="flex  items-center bg-black justify-center gap-3 border p-4 pt-2 pb-2 rounded-lg text-white">
                                            <BsTelephoneOutbound className="text-xl"/>
                                            <div> Téléphone</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" w-fit flex gap-2   mt-8 p-1 bg-gray-300 rounded-sm ">
                    <button className={`p-4 pt-1 pb-1  shadow-white border-white border rounded-sm ${activeTab === 'Profil' ? 'bg-white' : ''} `} onClick={() => clickHandler('Profil')} >Profil</button>
                    <button className={`p-4 pt-1 pb-1  shadow-white border-white border rounded-sm ${activeTab === 'Services' ? 'bg-white' : ''} `} onClick={() => clickHandler('Services')}>Services</button>
                    <button className={`p-4 pt-1 pb-1  shadow-white border-white border rounded-sm ${activeTab === 'Avis' ? 'bg-white' : ' '} `} onClick={() => clickHandler('Avis')}>Avis</button>
                </section>
                <section className="w-2/3  flex flex-col gap-5 border mt-8">
                        {activeTab === 'Profil' && <ProfilProfil technicien={technicien} />}
                        {activeTab === 'Services' && <ProfilService />}
                        {activeTab === 'Avis' && <ProfilAvis />}
                </section>
            </div>
        </div>
    )
}