"use client"

import { useActionState } from "react";
import { loginUser } from "./action";

const initialState = {
    values: {
        navn:"",
           email: "",
        besked: "" 
    },
    errors: undefined
}; 

export default function KontaktForm() {

    const [state, formAction, isPending] = useActionState(loginUser, initialState);

    return ( 
        <form  className = " text-white mx-auto  m-[27] "  action={formAction} noValidate>
            <div >
                <div>
                    <label htmlFor="navn">Navn</label>
                    <input type="navn" name="navn" defaultValue={state.values.navn}></input>
                    {state.errors?.navn && <p>{state.errors.navn}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" defaultValue={state.values.email}></input>
                    {state.errors?.email && <p>{state.errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="besked">besked</label>
                    <input type="besked" name="besked" defaultValue={state.values.besked}></input>
                    {state.errors?.besked && <p>{state.errors.besked}</p>}
                </div>
            </div>
            {state.errors?.form && <p>{state.errors.form}</p>}
            <button type="submit"  disabled={isPending} className="bg-green-400 disabled:bg-grey-400">{ isPending ? "Sender besked ..." : "Send besked"}</button>
        </form>
    )
}