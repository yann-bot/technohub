



export default function Home() {
    const items = [
        'item1',
        'item2',
        'item3',

    ]
    const elements = [];

    for (let i = 0; i < items.length; i++) {
        elements.push(<div key={i}>{items[i]}</div>);
    }

   return(
       <div>
            <header className='border '>
                 <nav>
                     <div>TechnoHub</div>
                     <ul>
                       <li>Devenir Technicien</li>
                       <li>Se connecter</li>
                     </ul>
                 </nav>
                 <div>
                    <div>
                        <h1>Trouver un technicien qualifié</h1>
                        <p>Des milliers de techniciens sont prêts à répondre à vos besoins</p>
                    </div>
                     <div>
                        <input type='search' />
                        <button>Search</button>
                     </div>
                     <div>
                         {items.map((fruit, index) => (
                             <div key={index}>{fruit}</div>
                         ))}
                     </div>
                 </div>
            </header>

             <main className='border border-red-500 mt-1'>
                 <section>
                    {/* Liste des techniciens afficher de façon aléatoire  */}
                     <h2>Techniciens qualifiés à votre écoute</h2>
                 </section>
                 <section>
                     <div>Comment ça marche</div>
                 </section>
                 <section>
                     {/* Devenir technicien */}
                 </section>

             </main>

             <footer className='border border-blue-500 mt-1'>
                 <div>
                     <section></section>
                     <section></section>
                     <section></section>
                     <section></section>
                 </div>
                 <div>

                 </div>

             </footer>

       </div>
   )
}