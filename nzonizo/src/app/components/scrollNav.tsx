import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from "next/link";


// Cette nav  s'affiche lorsque l'utilisateur scroll la page

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
                <div className={clsx(" font-bold font-sans md:text-2xl text-orange-500 font-bold")}> NzoniZo </div>
                <div>
                    <form>
                        <input type='search' value='Rechercher un technicien' className={clsx("border border-gray-500 p-2 pl-10 pr-10 rounded-[100px]")}/>
                    </form>
                </div>
                    <ul className={clsx('md:flex  md:gap-3 ')}>
                        <li> <Link href='#' className={clsx("md:text-xl font-serif  border border-gray-200 p-3", "hover:bg-orange-500 hover:text-white")}>Devenir Pro</Link> </li>
                        <li> <Link href='#' className={clsx("md:text-xl font-serif  border border-gray-200 p-3","hover:bg-orange-500 hover:text-white")}>Se connecter</Link> </li>
                    </ul>

            </nav>
        )


}