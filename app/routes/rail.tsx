import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Raildash } from "~/components/raildash";


const url = "https://mock-api.jmorrison.workers.dev/"



export const loader = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const trainData = await response.json();

        // Transform the data into a simpler format
        const simplifiedData = trainData.map(item => ({
            id: item.vehicle.trip.tripId,
            location: `Lat: ${item.vehicle.position.latitude}, Long: ${item.vehicle.position.longitude}`,
            status: item.vehicle.currentStatus,
            speed: `${item.vehicle.position.speed.toFixed(2)} mph`
        }));
        console.log(simplifiedData)

        return json(simplifiedData);
    } catch (error) {
        console.error("Failed to fetch train data:", error);
        throw new Response("Error fetching train data", { status: 500 });
    }
};

 


export default function Dashboard() {
    const { trainData } = useLoaderData()
    //console.log(trainData)
    return (
        <Raildash trainData={trainData} />
        
    )
}