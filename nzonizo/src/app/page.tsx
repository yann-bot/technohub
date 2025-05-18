
import clsx from "clsx";
import  Header from '@/components/header'
import  Footer from '@/components/footer'
import TechGrille from "@/components/techGrille";
import Avis from "@/components/avisclient"
import Commentmarche from "@/components/commentçamarche";


export default function Home() {
   return(
       <div className={clsx("flex flex-col gap-10  ")}>
             <Header/>
             <main className={clsx('mt-1 flex flex-col gap-10')}>
                 <section className={clsx(' items-center ')}>
                       <TechGrille />
                 </section>
                 <section className={clsx('flex flex-col items-center  ')}>
                      <Commentmarche />
                 </section>
                 <section className={clsx('flex flex-col items-center h-100')}>
                      <Avis />
                 </section>
             </main>
             <Footer />
       </div>
   )
}