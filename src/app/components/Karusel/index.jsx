"use client"

import Image from "next/image";
import DetSigerVoresKunderOmOsCard from "../DetSigerVoresKunderOmOsCard";
import { useState } from "react";


export default function Karusel({ vidnesbyrd }) {
const len = vidnesbyrd.length;

  const  [index, setIndex] = useState(0);

    return (
        <section className="text-white">
            <h3 >Det siger vores</h3><h3> kunder om os</h3>
            <DetSigerVoresKunderOmOsCard bodytext={vidnesbyrd[index].content}
                name={vidnesbyrd[index].name} occupation={vidnesbyrd[index].occupation} />
            <button  onClick={()=>  setIndex(index === 0 ? len-1 : index - 1)}> 
                <Image
                    src="/KeyboardArrowLeft.png"
                    alt="KeyboardArrowLeft.png"
                    width={43}
                    height={43}
                    priority
                />
            </button>
            <button onClick={()=>  setIndex(index < len - 1 ? index + 1 : 0)}>
                <Image
                    src="/KeyboardArrowRight.png"
                    alt="KeyboardArrowRight.png"
                    width={43}
                    height={43}
                    priority
                />
            </button>
        </section>)

}