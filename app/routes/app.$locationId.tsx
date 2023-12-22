
import { Link, useLoaderData } from "@remix-run/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { supabase } from "~/lib/supa.server"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { json } from "@remix-run/node"
import { Package2Icon, SearchIcon } from "~/components/icons"
import { WaysideHeader } from "~/components/waysideHeader"




export async function loader({ params }) {
    console.log("Params passed to loader:", params.locationId);

    try {
        // Directly use params.locationId in the query
        let { data: locations, error } = await supabase
            .from('Location')
            .select('name, milePost, subdivision, platform, image')
            .eq('id', params.locationId);

        console.log("Query result:", locations);

        if (error) {
            console.error("Error fetching location:", error);
            throw new Response("Error fetching data", { status: 500 });
        }

        if (locations && locations.length > 0) {
            return json(locations[0]); // Return the first location if available
        } else {
            throw new Response("Location not found", { status: 404 }); // No locations found
        }
    } catch (err) {
        console.error("Exception in loader:", err);
        throw new Response("Internal Server Error", { status: 500 });
    }
}



export default function LocationId() {
    const data = useLoaderData()
    return (
        <div>
          <WaysideHeader />
          <main className="flex flex-col gap-1 p-1 bg-[#F5F5F5]">
      <section>
        <Card className="bg-white">
          <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold">{data.name} Details</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-sm font-semibold">
              <strong>Location Name:</strong>
              <span> {data.name}</span>                   
            </p>
            <p className="text-sm font-semibold">
              <strong>Mile Post: </strong>
             {data.milePost}                                
            </p>
            <p className="text-sm font-semibold">
              <strong>Identifier:</strong>
              XYZ123{"\n                                  "}
            </p>
            <p className="text-sm font-semibold">
              <strong>Platform:</strong>
              {data.platform}
            </p>
            <p className="text-sm font-semibold">
              <strong>Module ID:</strong>
              MOD-789{"\n                                  "}
            </p>
            <p className="text-sm font-semibold">
              <strong>Instrument House Type:</strong>
              Type-A{"\n                                  "}
            </p>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card className="bg-white">
          <CardHeader className="p-4">
            <CardTitle className="text-xl font-bold">Equipment List</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Equipment Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Equipment A</TableCell>
                  <TableCell>Type I</TableCell>
                  <TableCell>Running</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Equipment B</TableCell>
                  <TableCell>Type II</TableCell>
                  <TableCell>Running</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Equipment C</TableCell>
                  <TableCell>Type III</TableCell>
                  <TableCell>Running</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card className="bg-white">
          <CardHeader className="p-4">
            <CardTitle className="text-xl font-bold">Recent Pictures</CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex flex-row gap-4">
            {/* <img
              alt="Placeholder image"
              className="w-[200px] h-[200px]"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            /> */}
            <Link to={data.image} target="_blank" rel="noopener noreferrer">
            <img
              alt="Placeholder image"
              className="w-[200px] h-[200px]"
              height="200"
              src={data.image || '/placeholder.svg'}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            </Link>
          </CardContent>
        </Card>
      </section>
    </main>
        </div>
    )
}

