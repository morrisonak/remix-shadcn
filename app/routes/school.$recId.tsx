import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Tcard from "~/components/tcard";
import { supabase } from "~/lib/supa.server"





export async function loader({
    params,
}: LoaderArgs) {
    try {

        let { data: school, error } = await supabase
            .from('school')
            .select('*')
            .eq('id', params.recId)

        if (error) {
            throw error;
        }
        console.log(school)

        return school
    } catch (err) {
        console.error('Error fetching data:', err);
        return null;

    }
}








export default function RecId() {
    const data = useLoaderData()
    console.log(data)
    return (
        <main className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-400 via-blue-500 to-teal-500">

            {data && data.length > 0 ? (
                data.map((record, index) => (
                    <Tcard key={index} data={record} />
                   
                ))
            ) : (
                <h1>No data found</h1>
            )}

           
        </main>
    );
}
