import { getAllActivities, getUser } from "@/lib/dal";
//import Footer from "../../components/footer";
import Image from "next/image";
import Link from "next/link";
import SearchPage from "../../search/page";
import MineHoldCard from "@/app/components/MineHoldCard";

export default async function profil({ params }) {
    const id = (await params).id;
    const user = await getUser(id);
    console.log(user)

    return (
        <main className=" bg-[#003147] w-[411px] m-[27] mx-auto ">
            <h2 className=" text-[24px] text-white text-center p-[10px]">Min profil</h2>
            <section className="bg-white flex flex-col  items-center justify-center">
                <Image className="mt-[20px]"
                    src="/Person.png"
                    alt="Person"
                    width={64}
                    height={64}
                    priority
                />
                <p className="mt-[10px]"><span className="mr-[10px]">{user.firstname}</span><span>{user.lastname}</span></p>
                <p className="mt-[10px]">{user.role}</p>
            </section>

            <h2 className="text-left ml-[24px] text-[27px] text-white font-semibold " >Hold</h2>

            <section className="  rounded-[12px]  text-left p-[10px]">

                {user.activities.map((activitie) => {
                     return ( <MineHoldCard name={activitie.name} weekday={activitie.weekday} time={activitie.time} hold_id={activitie.id}/>)})}

            </section>

        </main>
    )
}
