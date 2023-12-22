
import { Link, useLoaderData } from "@remix-run/react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"



import { MoreHorizontalIcon } from "lucide-react"
import { supabase } from "~/lib/supa.server"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { json } from "@remix-run/node"
import type { LoaderArgs } from "@remix-run/node"
import { useParams } from "@remix-run/react";





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
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                <Link className="lg:hidden" to="#">
                    <Package2Icon className="h-6 w-6" />
                    <span className="sr-only">Home</span>
                </Link>
                <div className="flex-1">
                    <h1 className="font-semibold text-lg">Wayside</h1>
                </div>
                <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                                placeholder="Search Wayside..."
                                type="search"
                            />
                        </div>
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="rounded-full" size="icon" variant="ghost">
                                <img
                                    alt="Avatar"
                                    className="rounded-full"
                                    height="32"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "32/32",
                                        objectFit: "cover",
                                    }}
                                    width="32"
                                />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>

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

function Package2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}