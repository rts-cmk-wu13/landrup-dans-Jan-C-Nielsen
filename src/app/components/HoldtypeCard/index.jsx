import Image from "next/image";

export default function HoldtypeCard({ headline, pic, bodytext }) {


    return (
        <section className="m-[27px] flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h2 className=" max-w-xs text-[18]  text-white">
                {headline} 
            </h2>
            <Image
                src={pic}
                alt={pic}
                width={411}
                height={823}
                priority
            />
            <p className="max-w-md  text-white leading-8">
                {bodytext}  </p>
        </section>
    )

}