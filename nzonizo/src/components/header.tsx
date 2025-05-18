"use client"

import ScrollNav from "./scrollNav";
import clsx from "clsx";
import Services from './listeService'
import Link from 'next/link';
import {useState} from "react";
import Connexion from "./connexion";
import Service from "@/data/service";

const service = Service;





export default  function Header() {
    const [show, setShow] = useState(false);

    return(
        <header className={ clsx( '  md:flex md:flex-col md:gap-10 md:overflow-hidden p-5 bg-orange-50 rounded-b-[50px] border-b border-gray-400')  }>
           <ScrollNav />
            {
                show && (
                    <>
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={() => setShow(false)} />
                        <Connexion setShow={ setShow } />
                    </>

                )
            }
            <nav className={ clsx( 'md:flex md:w-full   justify-between')}>
            <Link href='#'  ><div className={clsx('  font-sans md:text-2xl text-orange-500 font-bold')}> NzoniZo </div></Link>
                <ul className={clsx('md:flex  md:gap-3 ')}>
                    <li> <Link href='#' className={clsx("md:text-xl font-serif  border border-gray-200 p-3", "hover:bg-orange-500 hover:text-white")}>Devenir Pro</Link> </li>
                    <li> <a href='#' onClick={() => setShow(true)} className={clsx("md:text-xl font-serif  border border-gray-200 p-3","hover:bg-orange-500 hover:text-white")}>Se connecter</a> </li>
                </ul>
            </nav>
            <div className={clsx(' md:flex md:flex-col gap-1 items-center')}>
                <div className={clsx('md:flex md:flex-col md:gap-1 md:justify-center md:items-center')}>
                    <h1 className={clsx("md:text-5xl md:mt-15 font-mono font-bold")}> Trouver un technicien qualifié </h1>
                    <p className={clsx("md:text-2xl mt-5 flex flex-col items-center font-serif justify-center text-gray-500")}> <span>Des milliers de techniciens sont prêts à  intervenir pour</span> <span>répondre à vos besoins</span>  </p>
                </div>
                <div className={clsx("md:mt-10  w-2/3 flex gap-2 justify-center  ")}>
                    <form className={clsx("md:w-2/3 flex bg-white")}>
                        <select className={clsx("w-1/2 border border-gray-400 border-r-0")}>
                            {
                                service.map((service,  index)=>(
                                    <option key={index} value={service.nom}>{service.nom}</option>
                                    )
                                )
                            }
                        </select>
                      <input type='search' placeholder="Ville ou quartier" className={clsx('md:border  border-gray-400 text-gray-500 flex w-1/2  pl-2   ')} />
                    </form>
                    <Link href="/Recherche" ><button className={clsx("border p-2 bg-orange-500 text-white", "hover:bg-orange-700")}> Rechercher </button></Link >
                </div>
                <div className={clsx(" rounded-2xl w-2/3 mt-10 ")}>
                    <Services />
                </div>
            </div>
        </header>
    )
}