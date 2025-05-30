import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

// Cette nav s'affiche lorsque l'utilisateur scroll la page

export default  function ScrollNav() {
    const [scroled, setScroled] = useState(false);

    useEffect(() => {
        const handleScroll = ()=> {
            setScroled(window.scrollY > 100);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
            <nav   className={`fixed top-0 left-0 w-full flex p-5 items-center justify-between rounded-b-[50px] bg-white z-50 transition-all duration-300 ${
                scroled ? 'block' : 'hidden'
            }`}>
                <div className={clsx(" font-sans md:text-2xl text-orange-500 font-bold")}><Link href="/"> NzoniZo</Link> </div>
                <div>
                    <form>
                       <div className="border border-orange-500 flex justify-center items-center rounded-[100px] w-80">
                           <FaSearch className="text-gray-500" />
                           <input type='search' placeholder='Rechercher un technicien' className=" p-2 m-1 border-none outline-none "/>
                       </div>
                    </form>
                </div>
                <ul className={clsx('md:flex  md:gap-3 ')}>
                    <li> <Link href='/DevenirTechnicien' className={clsx("md:text-xl font-serif  border border-gray-200 p-3", "hover:bg-orange-500 hover:text-white")}>Devenir Pro</Link> </li>
                    <li> <Link href='#' className={clsx("md:text-xl font-serif  border border-gray-200 p-3","hover:bg-orange-500 hover:text-white")}>Se connecter</Link> </li>
                </ul>
            </nav>
        )
}