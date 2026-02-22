import { getActivitiesForInstructor, getUser } from "@/lib/dal";
//import Footer from "../../components/footer";
import Image from "next/image";
import Link from "next/link";

import MineHoldCard from "@/app/components/MineHoldCard";

export default async function deltagerliste() {
    const user = await getUser();
    console.log(user)
    const ActivitiesForInstructor = await getActivitiesForInstructor()
    console.log(ActivitiesForInstructor)
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

            <section className=" text-white rounded-[12px]  text-left p-[10px]">

                {ActivitiesForInstructor.map((a) => {
                    return (
                        <>
                            <p> {a.name}</p>
                            <p>Deltagere:</p>
                            {a.users.map((u) => {
                                return (<> 
                              <p className="text-[18px] mt-[10px]  mb-[24px]"><span className="mr-[10px]">{ u.firstname }</span><span>{ u.lastname }</span><span>{ u.age }</span></p>  
                                </>
                                )
                            })}

                        </>
                    )
                })}

            </section>

        </main>
    )
}
