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


export async function getAllActivities() {
    console.log("getAllActivities");

    try {
        const response = await fetch("http://localhost:4000/api/v1/activities");

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
        console.error("getAllActivities error:", error);

        return {
            success: false,
            message: "Fejl. Kunne ikke hente getAllActivities"
        };
    }
}


export async function getActivitie(id) {
    console.log("getActivitie:"+id);

    try {
        const url = "http://localhost:4000/api/v1/activities/"+id
        console.log("url:"+url);
        const response = await fetch(url);

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
        console.error("getActivitie error:", error);

        return {
            success: false,
            message: "Fejl. Kunne ikke hente getActivitie"
        };
    }
}