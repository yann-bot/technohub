import React, { useEffect, useState } from 'react';



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
            <nav   className={`fixed top-0 left-0 w-full  border border-red-500 z-50 transition-all duration-300 ${
                scroled ? 'block' : 'hidden'
            }`}>
                <div> Technohub </div>
                <div>
                    <form>
                        <input type='search' value='Rechercher un technicien'/>
                    </form>
                </div>
                <ul>
                    <li>Devenir Technicien</li>
                    <li>Se connecter</li>
                </ul>
            </nav>
        )


}