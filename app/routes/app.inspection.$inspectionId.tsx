import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { supabase } from "~/lib/supa.server"





export async function loader({
    params,
}: LoaderArgs) {
    try {

        let { data: inspection, error } = await supabase
            .from('audit')
            .select('*')
            .eq('id', params.inspectionId)

        if (error) {
            throw error;
        }
        console.log(inspection)

        return inspection
    } catch (err) {
        console.error('Error fetching data:', err);
        return null;

    }
}








export default function RecId() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Data List</h1>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold">Inspection performed by {item.firstName} {item.lastName}</h2>
            <p>Email: <span className="text-sm text-gray-600">{item.email}</span></p>
            <p>Subdivision: <span className="text-sm text-gray-600">{item.subdivision}</span></p>
            <p>Location: <span className="text-sm text-gray-600">{item.location}</span> - Mile Post: <span className="text-sm text-gray-600">{item.milePost}</span></p>
            <p>Revision: <span className="text-sm text-gray-600">{item.revision}</span>, Selected Date: <span className="text-sm text-gray-600">{item.selectedDate}</span></p>
            <p>Markups: <span className="text-sm text-gray-600">{item.markups}</span></p>
            <p>Message: <span className="text-sm text-gray-600">{item.message}</span></p>
          </div>
        ))}
      </div>
    </div>
    );
}
