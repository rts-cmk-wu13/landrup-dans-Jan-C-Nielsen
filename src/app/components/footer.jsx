import Image from "next/image";
import Link from "next/link";

export default function Footer() {


    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white mx-auto w-[411px]">
            <div className=" flex justify-evenly mx-auto max-w-7xl px-2 py-2 text-center">
                {/* Clickable images */}
                <Link href="/" >
                   
                        <Image
                            src="/Home.png"
                            alt="Home"
                            width={45}
                            height={45}
                            className=""
                        />
                   
                </Link>

                <Link href="/aktiviteter" >
                  
                        <Image
                            src="/Aktiviteter.png"
                            alt="Aktiviteter"
                            width={45}
                            height={45}
                            className=""
                        />
                  
                </Link>

                <Link href="/profil" >
                  
                        <Image
                            src="/Profil.png"
                            alt="Profil"
                            width={45}
                            height={45}
                            className=""
                        />
                   
                </Link>


            </div>

        </footer>
    )
}
