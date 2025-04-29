
import clsx from "clsx";
import  Header from './components/header'
import  Footer from './components/footer'



export default function Home() {


   return(
       <div className={clsx("flex flex-col ")}>
             <Header />
             <main className=' mt-1 h-[700px] flex flex-col'>
                 <section className={clsx('flex flex-col items-center h-100')}>
                    {/* Liste des techniciens afficher de façon aléatoire  */}
                     <h2 className={clsx("font-serif tracking-wide text-3xl mt-5")}>Techniciens qualifiés à votre écoute</h2>
                 </section>
                 <section className={clsx('flex flex-col items-center h-100')}>
                     <h2 className={clsx("font-serif tracking-wide text-3xl mt-5")}>Comment ça marche ?</h2>
                 </section>
                 <section className={clsx('flex flex-col items-center h-100')}>
                     <h2 className={clsx("font-serif tracking-wide text-3xl mt-5")}>Devenez Technicien ?</h2>
                 </section>
             </main>
             <Footer />

       </div>

   )
}