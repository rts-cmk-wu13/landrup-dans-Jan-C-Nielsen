
import { getAllActivities } from "@/lib/dal";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import SearchPage from "../search/page";

export default async function aktiviteter({searchParams}) {

    const searchstr = searchParams != null ? (await searchParams).searchstr : null;
   
    const aktiviteter = await getAllActivities(searchstr);
    console.log(aktiviteter)

    return (
        <main className="flex-1 pb-24 bg-[#003147] w-[411px] mx-auto flex flex-col items-center justify-center text-white">
            <SearchPage/>
            <h2 className="ml-[27] text-[36px] self-start w-full text-left">Aktiviteter</h2>
            <ul>
                {aktiviteter.map((aktivitet) => {
                    const imageurl = aktivitet.asset.url;
                    const url = "/aktiviteter/" + aktivitet.id;

                    return (
                        <li key={aktivitet.id}>
                            <Link href={url}>
                                <div className="relative mb-[20px]">
                                    <Image className=" rounded-[39px_39px_0px_39px]" src={imageurl}
                                        alt={aktivitet.asset.url}
                                        width={360}
                                        height={344}
                                        unoptimized
                                    ></Image>
                                    <div className="absolute bottom-0 left-0 w-full text-white bg-black/60 p-3 rounded-[0px_39px_0px_39px]">
                                        <p className="text-[22px]">  {aktivitet.name}</p>
                                        <p> {aktivitet.minAge} -  {aktivitet.maxAge} år</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Footer />
        </main>

    )

}