import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Raildash } from "~/components/raildash";
import { status_codes, stop_codes } from "api/data/data";
import { Train } from "lucide-react";
//const mockUrl = "https://mock-api.jmorrison.workers.dev/";

const url = "https://capmetro-vehicle.jmorrison.workers.dev/";




export const loader = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const trainData = await response.json();


        // Transform the data into a simpler format
        const simplifiedData = trainData.map(train => ({
            id: `CMTY ${train.id.slice(2)}`,
            latitude: train.vehicle.position.latitude,
            longitude: train.vehicle.position.longitude,
            status: `${status_codes[train.vehicle.currentStatus] ? status_codes[train.vehicle.currentStatus] : train.vehicle.currentStatus} ${stop_codes[train.vehicle.stopId] ? stop_codes[train.vehicle.stopId] : "Unknown"}`,
            speed: Math.round(train.vehicle.position.speed * 3600 / 1609.34),
            stopId: train.vehicle.stopId
        }));


        return json(simplifiedData);
    } catch (error) {
        console.error("Failed to fetch train data:", error);
        throw new Response("Error fetching train data", { status: 500 });
    }
};





export default function Dashboard() {
    const trainData = useLoaderData(); 

    return (
        <Raildash trainData={trainData} />
    );
}
