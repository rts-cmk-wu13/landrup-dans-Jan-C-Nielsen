import Image from "next/image";
import HoldtypeCard from "./components/HoldtypeCard";
import Nyhedsbrev from "./components/Nyhedsbrev";
import DetSigerVoresKunderOmOsCard from "./components/DetSigerVoresKunderOmOsCard";
import Karusel from "./components/Karusel";
import { tellAllToThePriest } from "../lib/dal.js"
import KontaktForm from "./components/KontaktForm";
import { redirect } from "next/navigation";
import Link from "next/link";
import Footer from "./components/footer";

export default async function Home() {

  const vidnesbyrd = await tellAllToThePriest();
  console.log(vidnesbyrd)

  return (
    <div className="  flex items-center justify-center">
      <main className=" flex-1 pb-24  bg-[#003147]">

        <section className=" w-full h-screen text-[36px] font-bold  relative text-white">
          <Image
            className="object-cover"
            src="/heroimg.jpg"
            alt="heroimg.jpg"
            fill
            priority
          />
          <div className="  absolute inset-0 flex flex-col items-center justify-center">

            <Image
              className="dark:invert"
              src="/Group 9.png"
              alt="logo"
              width={64}
              height={64}
              priority
            />

            <h1 className="italic ml-[74px]">Landrup</h1>
            <h1 className="italic ml-[217px]  "> Dans</h1>
            <Image className=" ml-[-50px]  mb-[300px]"
              src="/Rectangle 20.png"
              alt="Line"
              width={366}
              height={4}
              priority
            />
            <Link href = "/login" className = " rounded-[10px] pt-[13px] pb-[13px] font-normal bg-white text-black text-[18px] pl-[50px] pr-[50px]  mb-[40px]">Log ind her</Link>
            <Image
              src="/Vector.png"
              alt="Vector"
              width={64}
              height={64}
              priority
            />
          </div>
        </section>

        <h1 className="m-[27] text-[36px] font-semibold text-white">
          Vores holdtyper
        </h1>
        <HoldtypeCard  headline="Børnehold" pic="/boernedans.jpg" bodytext=" På børneholdene leger vi os ind i dansens verden gennem musik, bevægelse og fantasi. Undervisningen styrker motorik, rytme og kropsbevidsthed i trygge rammer. Fokus er på danseglæde, fællesskab og aktiv bevægelse, hvor alle kan være med." />
        <HoldtypeCard headline="Selskabs- og seniordans" pic="/seniordans.jpg" bodytext=" Selskabs- og seniordans kombinerer hyggeligt samvær med skånsom motion. Vi danser klassiske pardanse i et tempo, hvor alle kan følge med. Undervisningen styrker balance, koordination og kondition, samtidig med at fællesskabet og danseglæden er i centrum." />
        <HoldtypeCard headline="Moderne dans og ballet" pic="/modernedans.jpg" bodytext=" Moderne dans og ballet forener teknik, kropskontrol og musikalsk udtryk. Træningen forbedrer styrke, smidighed og holdning gennem varierede øvelser. Undervisningen foregår i en positiv atmosfære, hvor bevægelsesglæde og koncentration skaber både fordybelse og effektiv motion." />
        <HoldtypeCard headline="Streetdance og hiphop" pic="/streethiphop.jpg" bodytext=" Streetdance og hiphop er energifyldt træning med fokus på rytme, attitude og fællesskab. Vi arbejder med grooves, koreografier og grundtrin, der styrker kondition og koordination. Stemningen er uformel og motiverende, så motion og danseglæde går hånd i hånd." />

        <Nyhedsbrev />

        <Karusel vidnesbyrd={vidnesbyrd} />

        <KontaktForm />

        <section className="  mb-[24px] text-center  text-white" >
          <Image className="mx-auto"

            src="/Group 9.png"
            alt="logo"
            width={64}
            height={64}
            priority
          />

          <h2 className="mt-[24px]  font-semibold text-[24px] ">Landrup Dans</h2>
          <p></p>
          <p className=" text-[18px] ">Pulsen 8 , 4000 Roskilde</p>
          <p className=" text-[18px] ">Tlf. 3540 4550</p>

        </section>
        <Footer />
      </main>
    </div>
  );
}
