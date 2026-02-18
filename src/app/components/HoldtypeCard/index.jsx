import Image from "next/image";

export default function BlogCard({ headline, pic, bodytext }) {


    return (
        <section className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                {headline}
            </h2>
            <Image
                className="dark:invert"
                src={pic}
                alt={pic}
                width={411}
                height={823}
                priority
            />
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                {bodytext}  </p>
        </section>
    )

}