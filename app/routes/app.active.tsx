import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Link, useLoaderData } from "@remix-run/react"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"


import { Package2Icon } from "~/components/icons"


export default function Active() {
    return (
        <div>
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                <Link className="lg:hidden" to="#">
                    <Package2Icon className="h-6 w-6" />
                    <span className="sr-only">Home</span>
                </Link>
                <div className="flex-1">
                    <h1 className="font-semibold text-lg">Active Monitoring</h1>
                </div>
                <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        {/* <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
              placeholder="Search Wayside..."
              type="search"
            />
          </div> */}
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
                            <DropdownMenuLabel><Link to="./">Home</Link></DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><Link to="Wayside">Wayside</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to="Crossings">Crossing</Link></DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                        <img
                            alt="Preview"
                            className="rounded-lg"
                            height="64"
                            src="/stop.svg"
                            style={{
                                aspectRatio: "64/64",
                                objectFit: "cover",
                            }}
                            width="64"
                        />
                        <div className="space-y-1.5">
                            <CardTitle className="text-lg font-semibold">Active Alarms <span className="bg-red-500 px-2 ml-2 text-lg font-bold text-black">1</span></CardTitle>
                            <CardDescription className="font-semibold">Current Central Subdivision Alarm status</CardDescription>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                        <img
                            alt="Preview"
                            className="rounded-lg"
                            height="64"
                            src="/Warning.svg"
                            style={{
                                aspectRatio: "64/64",
                                objectFit: "cover",
                            }}
                            width="64"
                        />
                        <div className="space-y-1.5">
                            <CardTitle className="text-lg font-semibold">Active Warning <span className="bg-yellow-300 px-2 ml-2 text-lg font-bold text-black">3</span> </CardTitle>
                            <CardDescription className="text-sm font-semibold">Current Central Subdivision Warning status</CardDescription>
                        </div>
                    </div>
                </CardContent>
            </Card>

            
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                        <img
                            alt="Preview"
                            className="rounded-lg"
                            height="64"
                            src="/alert.svg"
                            style={{
                                aspectRatio: "64/64",
                                objectFit: "cover",
                            }}
                            width="64"
                        />
                        <div className="space-y-1.5">
                            <CardTitle className="text-lg font-semibold">Active Infomation<span className="bg-green-300 px-2 ml-2 text-lg font-bold text-black">1</span></CardTitle>
                            <CardDescription className="text-sm font-semibold">Current Central Subdivision Information status</CardDescription>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}