import { addUserToActivity } from "@/lib/dal";

export default async function aktiviteter({params}) {

    const activty_id = (await params).activty_id 
   
    const aktiviteter = await addUserToActivity (activty_id);

    console.log(aktiviteter);
}