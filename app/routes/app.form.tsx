import { ActionArgs, ActionFunction, redirect } from "@remix-run/node";
import Forms from "~/components/form"
import { supabase } from "~/lib/supa.server";



export let action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData();

    const selectedDate = formData.get("selectedDate");
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const subdivision = formData.get("subdivision");
    const milePost = formData.get("mile-post");
    const location = formData.get("location-name");
    const revision = formData.get("revision");
    const markups = formData.get("markups");
    const message = formData.get("message");



    console.log("form Data:", selectedDate, firstName, lastName, email, milePost, subdivision, location, revision, markups, message);

    try {
        const { data, error } = await supabase
            .from('audit')
            .insert([
                { firstName: firstName, lastName: lastName, email: email, milePost: milePost, subdivision: subdivision, location: location, revision: revision, markups: markups, selectedDate: selectedDate, message: message },
            ])
            .select()


        if (error) throw error;

        // Assuming data is an array and the ID is in the first item
        const recordId = data[0].id;

        return redirect(`../`);;
    } catch (err) {
        console.error('Error inserting record:', err);
        // Handle error (e.g., redirect to an error page or show a message)
    }
};



export default function add() {
    return (

        <Forms />

    )
}