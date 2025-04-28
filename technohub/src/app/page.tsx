
import clsx from "clsx";
import  Header from './components/header'
import  Footer from './components/footer'



export default function Home() {


   return(
       <div className={clsx("")}>
             <Header />
             <main className='border border-red-500 mt-1 hidden'>
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
             <Footer />

       </div>

   )
}