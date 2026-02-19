
import Image from "next/image";


export default function Headline() {



    return (
        <div className="mx-auto text-[36px] ">
            <Image  className="mx-auto mt-[64]"
                src="/Group 9.png"
                alt="logo"
                width={64}
                height={64}
                priority
            />

            <h1 className="italic mt-[64] ml-[100px]">LANDRUP</h1>
            <h1 className="italic ml-[205px] "> DANS</h1>
            <Image  className="ml-[-30px]"
                src="/Rectangle 20.png"
                alt="Rectangle 20"
                width={366}
                height={4}
                priority
            />
        </div>
    )
}