"use server"; //Skal stå på server acions

import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { success } from "zod";


export async function tellAllToThePriest() {
    console.log("tellAllToThePriest");

    try {
        const response = await fetch("http://localhost:4000/api/v1/testimonials");

        //Response.ok is false for 404.
        if (response.status === 404) {
            return notFound();
        }

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        //Most servers return application/json; charset=utf-8
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        }

        throw new Error("Response is not JSON");

    } catch (error) {
        console.error("tellAllToThePriest error:", error);

        return {
            success: false,
            message: "Fejl. Kunne ikke hente vidnesbyrd"
        };
    }
}



export async function getBlogPostById(id) {
    console.log("getBlogPostById")
    try {
        if (!id)
            throw new Error({ message: "No ID" })

        if (!/^\d+$/.test(id))
            throw new Error("ID not a number")


        const response = await fetch("http://localhost:4000/posts/" + id);
        if (!response.ok)
            throw new Error({ message: "Something went wrong" })

        //dur ikke her
        if (response.status === 404)
            return notFound();

        if (response.status !== 200)
            throw new Error({ message: response.statusText })


        if (response.headers.get("content-type") === "application/json") {
            const data = await response.json();
            // if (data.data === null) flyttet ud, dur ikke her
            //   return notFound();
            return data;
        }

        return await response.json();
    }
    catch (error) {
        console.log("getAllBlogPosts ", error)
        return {
            success: false,
            message: "ERROR"
        }
    }

}