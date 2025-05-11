import Link from "next/link";
import { FaX } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";

export default function Connexion({ setShow }) {
    return (
        <div className="fixed  my-3  top-0 left-1/2 -translate-x-1/2  z-50 px-4  shadow-2xl  rounded-2xl container flex flex-col w-fit bg-white">
            <div className="">
                <button onClick={() => setShow(false)} className=" p-2 pt-4"><FaX/></button>
            </div>

            <form className="flex flex-col  w-100 gap-6 m-15 mt-20 mb-20">
                <h2 className="text-xl font-bold mb-4 self-center">Connectez-vous</h2>
                <section className="flex flex-col gap-2">
                    <input type="email" id="email" placeholder="Adresse email" className="p-4  rounded-2xl bg-gray-200 " />
                    <button type="submit" className="bg-orange-500 text-white p-4 rounded-2xl ">Connexion</button>
                </section>
                <div className="text-center">ou</div>
                <section className="flex flex-col gap-2">
                    <button type="button" className="bg-gray-300 text-white  flex  items-center  p-4 rounded-2xl"> <FcGoogle className="w-10 mr-15" /> <span className="">Connexion avec Google</span></button>
                    <button type="button" className="bg-gray-300 text-white  flex  items-center  p-4 rounded-2xl"><FaPhoneAlt  className="w-10 mr-15" /><span>Connexion avec Numéro</span></button>
                </section>
                <section className="flex flex-col items-center mt-4">
                    <p>Vous n&#39;avez pas encore de compte ?</p>
                    <Link href="/register" className="text-blue-500 underline">Inscrivez-vous</Link>
                </section>
            </form>
        </div>
    );
}
