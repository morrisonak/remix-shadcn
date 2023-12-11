import { json } from "@remix-run/node";
//import { useLoaderData } from "@remix-run/react";
import { Raildash } from "~/components/raildash";


const url = "https://mock-api.jmorrison.workers.dev/"



export const loader = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const trainData = await response.json();

        // Assuming trainData is an array with at least one object
        if (Array.isArray(trainData) && trainData.length > 0) {
            const { id } = trainData[0]; // Access the first object in the array
            console.log('the train id is:', id);

            return trainData;
        } else {
            console.log('trainData is empty or not an array with objects');
            return null; // You can return a default value or handle this case as needed
        }
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error to handle it elsewhere if needed
    }
}





export default function Dashboard() {
    // const { trainData } = useLoaderData()
    //console.log(trainData)
    return (
        <div>
            <h1>Test</h1>
        </div>

    )
}