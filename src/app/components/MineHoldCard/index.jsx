import Link from "next/link";

export default function MineHoldCard({ name, weekday, time, hold_id }) {

    const holdlink = "/aktiviteter/" + hold_id;

    return (
        <section className="rounded-[10px] p-[16px]  bg-white/80 text-black m-[27]  ">
            <h2></h2>
            <p className="text-[26px] mt-[10px]">{name}</p>
            <p className="text-[18px] mt-[10px]  mb-[24px]"><span className="mr-[10px]">{weekday}</span><span>Kl.{time}</span></p>
            <Link href={holdlink} className="rounded-[10px] text-[18px] p-[9px_28px] text-white  bg-black" >Vis hold</Link>
        </section>
    )
}
