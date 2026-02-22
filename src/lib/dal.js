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



export async function getUser(id) {
    try {
        console.log("getUser(id):", id);

        const cookieStore = await cookies();
        const accessTokenCookie = cookieStore.get("accessToken");

        if (!accessTokenCookie) {
            console.error("Access token cookie not found");
            redirect("/login");
        }

        console.log("Access token:", accessTokenCookie.value);

        const url = `http://localhost:4000/api/v1/users/${id}`;
        console.log("url:", url);
        const response = await fetch(
            url,
            {
                headers: {
                    Authorization: `Bearer ${accessTokenCookie.value}`
                }
            }
        );

        if (response.status === 404) {
            return notFound();
        }

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const contentType = response.headers.get("content-type");

        if (contentType?.includes("application/json")) {
            return await response.json();
        }

        throw new Error("Response is not JSON");

    } catch (error) {
        console.log("getUser error:", error);

        return {
            success: false,
            message: "Fejl. Kunne ikke hente user"
        };
    }
}


export async function addUserToActivity(user_id, activity_id) {
    try {
        console.log("User id:", id);

        const cookieStore = await cookies();
        const accessTokenCookie = cookieStore.get("accessToken");

        if (!accessTokenCookie) {
            console.error("Access token cookie not found");
            redirect("/login");
        }

        console.log("Access token:", accessTokenCookie.value);

        const url = `http://localhost:4000/api/v1/users/${user_id}/activities/${activity_id}`;
        console.log("url:", url);
        const response = await fetch(
            url,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessTokenCookie.value}`
                }
            }
        );

        if (response.status === 404) {
            return notFound();
        }

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const contentType = response.headers.get("content-type");

        if (contentType?.includes("application/json")) {
            return await response.json();
        }

        throw new Error("Response is not JSON");

    } catch (error) {
        console.log("getUser error:", error);

        return {
            success: false,
            message: "Fejl. Kunne ikke hente user"
        };
    }
}


export async function getAllActivities(searchStr = null) {
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
            let data = await response.json();
            //søg aktivitets-titel, ugedag og intruktørnavn.
            if (searchStr) {
                data = data.filter((item) => (item.name.includes(searchStr) || item.weekday.includes(searchStr)))
            }
            return data;
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
    console.log("getActivitie:" + id);

    try {
        const url = "http://localhost:4000/api/v1/activities/" + id
        console.log("url:" + url);
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