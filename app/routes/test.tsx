import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

// Define TypeScript interfaces
interface Position {
  latitude: number;
  longitude: number;
  bearing?: number;
  speed: number;
}

interface Vehicle {
  position: Position;
  currentStopSequence: number;
  currentStatus: string;
  timestamp: string;
  stopId: string;
}

interface TrainData {
  id: string;
  vehicle: Vehicle;
  uuid: string;
}

interface TransformedTrainData {
  id: string;
  currentStopSequence: number;
  currentStatus: string;
  timestamp: string;
  stopId: string;
  position: Position;
  uuid: string;
}

const url = 'https://mock-api.jmorrison.workers.dev/';

export const loader = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const trainDataArray: TrainData[] = await response.json();

    const transformedData: TransformedTrainData[] = trainDataArray.map(({ id, vehicle, uuid }) => {
      const { position, currentStopSequence, currentStatus, timestamp, stopId } = vehicle;
      return { id, currentStopSequence, currentStatus, timestamp, stopId, position, uuid };
    });

    return json(transformedData); 
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Dashboard component
export default function Dashboard() {
  const trainData: TransformedTrainData[] = useLoaderData();

  // Function to render train data
  const renderTrainData = () => {
    if (trainData.length > 0) {
      return trainData.map((train: TransformedTrainData, index: number) => (
        <div key={index}>
          <div className='py-2 px-4'>
            <p>Train ID: {train.id}</p>
            <p>Current Stop Sequence: {train.currentStopSequence}</p>
            <p>Current Status: {train.currentStatus}</p>
            <p>Timestamp: {train.timestamp}</p>
            <p>Stop ID: {train.stopId}</p>
            <p>Speed: {train.position.speed}</p>
            <p>UUID: {train.uuid}</p>
          </div>
        </div>
      ));
    } else {
      return <p>No train data available.</p>;
    }
  };

  return (
    <div>
      <h1 className="p-2">Train Data:</h1>
      <h2 className="py-2">{renderTrainData()}</h2>
    </div>
  );
}
