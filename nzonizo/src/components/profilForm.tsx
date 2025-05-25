
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";



export default function ProfilForm() {
    return (
        <div className="  shadow-2xl rounded-2xl container flex flex-col w-fit bg-white my-3">
            {/*fixed top-1/2 right-0 -translate-y-1/2 z-50*/}
            <form className="flex flex-col w-78 gap-3 m-15 mt-20 mb-20">
                <h2 className="text-2xl font-bold mb-4 self-center">Créez votre profil</h2>
                <section className="flex flex-col gap-2">
                    <input
                        type="email"
                        id="email"
                        placeholder="Adresse email"
                        className="p-4 rounded-2xl bg-gray-200"
                    />
                    <button type="submit" className="bg-orange-500 text-white p-4 rounded-2xl"  >
                        Inscription par email
                    </button>
                </section>
                <div className="text-center">ou</div>
                <section className="flex flex-col gap-2">
                    <button type="button" className="bg-gray-300 text-white flex items-center p-4 rounded-2xl">
                        <FcGoogle className="w-6 h-6 mr-4" />
                        <span>Connexion avec Google</span>
                    </button>
                    <button type="button" className="bg-gray-300 text-white flex items-center p-4 rounded-2xl">
                        <FaPhoneAlt className="w-6 h-6 mr-4" />
                        <span>Connexion avec Numéro</span>
                    </button>
                </section>
                <section className="flex flex-col items-center mt-4 gap-2 text-sm">
                    <div className="font-bold text-gray-500">Vous avez déja un  compte ? <Link href="#" className="text-blue-500 font-bold">Connexion</Link></div>
                    <div className="text-gray-500">En vous inscrivant, vous acceptez nos   <Link href="#" className="text-blue-500 underline">Conditions générales</Link></div>
                </section>
            </form>
        </div>
    );
}
