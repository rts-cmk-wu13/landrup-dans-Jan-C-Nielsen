import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link.js";
//import ListenButton from "../ListenButton.jsx";
import { redirect, useSearchParams } from "next/navigation.js";

import { saveMessage } from "./actions";

export default async function SearchPage() {



    return (
        <div>
             <form
                action={saveMessage}
                className="mx-auto flex max-w-md items-center gap-3 rounded-2xl  p-6 "
            >
                <input
                    name="message"
                    placeholder="Søg"
                    className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-white placeholder-gray-400 focus:bg-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-blue-200"
                />

                <button
                    type="submit"
                    className="rounded-xl px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
                >
                     <Image className=" rounded-[39px_39px_0px_39px]"
                                         src="/search.png"
                                        alt="Search"
                                        width={24}
                                        height={24}
                                        unoptimized
                                    ></Image>
                </button>
            </form>
       </div>
    );
}