import { ActionArgs, ActionFunction, redirect } from "@remix-run/node";
import { AddComponent } from "~/components/addComponent";
import { supabase } from "~/lib/supa.server";

export let action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData();

    const student = formData.get("student");
    const subject = formData.get("subject");
    const time = formData.get("time");
    const date = formData.get("date");

    console.log("Selected:", student, subject, time, date);

    try {
        const { data, error } = await supabase
            .from('school')
            .insert([
                { student: student, subject: subject, timeUnit: time, dateCompleted: date },
            ])
            .select()
           

        if (error) throw error;

        // Assuming data is an array and the ID is in the first item
        const recordId = data[0].id;

        return redirect(`../${recordId}`);
    } catch (err) {
        console.error('Error inserting record:', err);
        // Handle error (e.g., redirect to an error page or show a message)
    }
};



export default function add() {
    return (

        <AddComponent />

    )
}