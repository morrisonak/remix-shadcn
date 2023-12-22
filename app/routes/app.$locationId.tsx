
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
            .select('name, milePost, subdivision, platform')
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

            <div className="grid grid-cols-1 gap-1 p-1 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-full md:col-span-2 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>{data.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Location Name</TableHead>
                                    <TableHead>Mile Post</TableHead>
                                    <TableHead>Subdivision</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.milePost}</TableCell>
                                    <TableCell>{data.subdivision}</TableCell>
                                    <TableCell className="text-right">$40</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className="col-span-full md:col-span-1 lg:col-span-1">
                    <CardHeader>
                        <CardTitle>Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between font-semibold">
                            <div>Platform</div>
                            <div>{data.platform}</div>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <div>Current CAD REV</div>
                            <div>8</div>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <div>Most Recent Active Configuration</div>
                            <div>date</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

