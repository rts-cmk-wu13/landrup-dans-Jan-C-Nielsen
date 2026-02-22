# Landrup danse app
Jan, WU13

## Tech stack

### Nextjs
Next.js er et JavaScript-framework bygget oven på React. Det er komponentbaseret og benytter fil-baseret routing, hvilket betyder, at mappestrukturen automatisk definerer applikationens routes.

Jeg har valgt at bruge Next.js, fordi frameworket allerede har truffet en række arkitektoniske beslutninger for mig, f.eks. hvordan routing er opbygget, server- og klientkode adskilles, og hvorledes datahentning håndteres. Det giver en mere ensartet og skalerbar kodebase.

Derudover har Next.js:

- Et stort community

- Et stort økosystem af plugins og værktøjer

- En hvis efterspørgsel på arbejdsmarkedet, dog er ren react mere efterspurgt.

Det gør teknologien både fremtidssikret og relevant i en professionel sammenhæng.

### API
Dette er givet, så der er ikke noget valg.

### Tailwind

Tailwind er et CSS framework. I stedet for at skrive CSS med egne klasser, bruger man predefinerede klasser direkte i HTML/JSX. Det giver hurtigere udvikling, da man ikke hele tiden skal skifte mellem CSS filerne og HTML/JSX. Det gør stylingen mere overskuelig, da den befinder sig sammen med HTML/JSX. Det vil også gøre det nemmere for den næste programmør der skal arbejde på projektet, at vedkommende ikke skal sidde og prøve at finde rundt i måske mange CSS filer.

Udover at det skal transpileres er det svært at nogle ulemper ved Tailwind.

### Javascript

JavaScript er fundamentet for hele applikationen. Det bruges til: komponentlogik, datahentning med efterfølgende dynamisk rendering og tilstandshåndtering. 

Til store projekter er Typescript et bedre valg, da det, ligesom rigtige programmeringssprog, har statisk typekontrol, således at type fejl opdages før kørsel. Det gør det bedre til store og skalerbare projekterUlemperne er at det transpileres til javascript og at Microsoft har opfundet det. De har en tendens til at droppe deres teknologier når de finder på noget sjovere, f.eks Silverlight.

Undertegnede har ikke særligt meget forstand på Typescript, Javascript er derfor blevet valgt istedet. Men hvis projektet vokser og får flere features, brugere og udviklere, vil TypeScript være en fordel, fordi:

Det reducerer fejl

Gør API-respons tydeligere

Gør samarbejde lettere

Gør vedligeholdelse nemmere

JavaScript er fint til mindre projekter eller prototyper, men i en professionel produktion vil mange virksomheder foretrække TypeScript, især i frameworks som Next.js.


## actions.jsx
``` javascript
import { redirect } from "next/navigation.js";

export async function saveMessage(formData) {
    "use server"
  const msg = formData.get("message");
  console.log("Besked modtaget:", msg);

const encodedMsg = encodeURIComponent(msg);

  redirect(`/aktiviteter?searchstr=${encodedMsg}`);
}

``` 
[actions.jsx](./src/app/search/actions.jsx)

## page.jsx
``` javascript
import Image from "next/image";
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
``` 
[page.jsx](./src/app/search/page.jsx)


Koden består af en server action (saveMessage) og en React-komponent (SearchPage), som viser en søgeformular. Det er en serverstyret søgeformular i next.js, det hele foregår på serveren.

Formålet er at lade brugeren skrive en søgetekst i et inputfelt og sende teksten til serveren. Det omdirigere til den samme side (/aktiviteter), men vedhæftet søgeteksten som en query-parameter i URL’en
F.eks. hvis brugeren skriver "Tango", bliver man sendt til /aktiviteter?searchstr=Tango
Det gør det muligt at filtrere aktiviteter baseret på brugerens input.

###Server Action

 `export async function saveMessage(formData) { `
     `"use server" `

"use server" fortæller Next.js, at funktionen skal køre på serveren.

Funktionen modtager automatisk formData fra formularen.

 `const msg = formData.get("message");`  henter værdien fra inputfeltet med name="message".

 `const encodedMsg = encodeURIComponent(msg); `  sikrer at specialtegn (f.eks blanktegn og æ, ø og å) bliver korrekt omsat til URL-format.

 `redirect(`/aktiviteter?searchstr=${encodedMsg}`);`  brugeren redirigeres til aktiviteter, men nu med en søgestreng som query-parameter.


###SearchPage komponenten (Formularen)

 `<form action={saveMessage}>` : formularens action peger  på server action funktionen. Når brugeren trykker "submit", kaldes saveMessage funktionen.

 `<input name="message" />` er vigtigt. Det er denne værdi, serveren henter med formData.get("message").

