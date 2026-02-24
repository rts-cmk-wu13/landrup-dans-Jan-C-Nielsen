

import Footer from "../../components/footer";
import { getActivitie, isUserInstructor, isUserRegistered } from "@/lib/dal";
import Image from "next/image";
import Link from "next/link";

export default async function aktiviteter({ params }) {
    const id = (await params).id;
    console.log("id " + id)
    const aktivitet = await getActivitie(id);
    console.log(aktivitet)
    const imageurl = aktivitet.asset.url;

    const UserRegistered = await isUserRegistered(aktivitet)
    console.log("UserRegistered:" + UserRegistered)

    const TilmeldUrl = UserRegistered ? "/frameld/" + id : "/tilmeld/" + id;
    const TilmeldText = UserRegistered ? "Frameld her" : "Tilmeld her";

    return (
        <main className="flex-1 pb-24 absolute inset-0 bg-[#003147] w-[411px] mx-auto flex flex-col items-center text-white">
            <div className="" >
                <Image src={imageurl}
                    alt={aktivitet.asset.url}
                    width={410}
                    height={482}
                    unoptimized
                >

                </Image>
              
                    <Link href={TilmeldUrl} className="relative top-[-110px] left-[200px] rounded-[10px] pt-[13px] pb-[13px] bg-[#003147] text-white text-[18px] pl-[20px] pr-[20px]">{TilmeldText}</Link>
                
                <div className="ml-[28px]">
                    <h2 className="text-[24px]"> {aktivitet.name}</h2>
                    <p> {aktivitet.minAge} -  {aktivitet.maxAge} år</p>
                    <p> {aktivitet.description}</p>
                </div>
            </div>
            <Footer />
        </main>

    )
}