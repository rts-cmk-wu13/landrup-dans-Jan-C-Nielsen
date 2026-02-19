import Image from "next/image";
import HoldtypeCard from "./components/HoldtypeCard";
import Nyhedsbrev from "./components/Nyhedsbrev";
import DetSigerVoresKunderOmOsCard from "./components/DetSigerVoresKunderOmOsCard";
import Karusel from "./components/Karusel";
import { tellAllToThePriest } from "../lib/dal.js"


export default async function Home() {

  const vidnesbyrd = await tellAllToThePriest();
console.log(vidnesbyrd)

  return (
    <div className=" flex min-h-screen items-center justify-center">
      <main className="  bg-[#000000]">
        <Image
          className="dark:invert"
          src="/heroimg.jpg"
          alt="heroimg.jpg"
          width={411}
          height={823}
          priority
        />
        <Image
          className="dark:invert"
          src="/Group 9.png"
          alt="logo"
          width={64}
          height={64}
          priority
        />
        <h1 className="max-w-xs m-[27] text-[36px] font-semibold text-white">
          Vores holdtyper
        </h1>
        <HoldtypeCard headline="Børnehold" pic="/boernedans.jpg" bodytext=" På børneholdene leger vi os ind i dansens verden gennem musik, bevægelse og fantasi. Undervisningen styrker motorik, rytme og kropsbevidsthed i trygge rammer. Fokus er på danseglæde, fællesskab og aktiv bevægelse, hvor alle kan være med." />
        <HoldtypeCard headline="Selskabs- og seniordans" pic="/seniordans.jpg" bodytext=" Selskabs- og seniordans kombinerer hyggeligt samvær med skånsom motion. Vi danser klassiske pardanse i et tempo, hvor alle kan følge med. Undervisningen styrker balance, koordination og kondition, samtidig med at fællesskabet og danseglæden er i centrum." />
        <HoldtypeCard headline="Moderne dans og ballet" pic="/modernedans.jpg" bodytext=" Moderne dans og ballet forener teknik, kropskontrol og musikalsk udtryk. Træningen forbedrer styrke, smidighed og holdning gennem varierede øvelser. Undervisningen foregår i en positiv atmosfære, hvor bevægelsesglæde og koncentration skaber både fordybelse og effektiv motion." />
        <HoldtypeCard headline="Streetdance og hiphop" pic="/streethiphop.jpg" bodytext=" Streetdance og hiphop er energifyldt træning med fokus på rytme, attitude og fællesskab. Vi arbejder med grooves, koreografier og grundtrin, der styrker kondition og koordination. Stemningen er uformel og motiverende, så motion og danseglæde går hånd i hånd." />

        <Nyhedsbrev />

        <Karusel vidnesbyrd={vidnesbyrd}/>
      </main>
    </div>
  );
}
