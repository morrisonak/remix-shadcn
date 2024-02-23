


import { Link, useLoaderData } from "@remix-run/react"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Package2Icon } from "~/components/icons"
import { supabase } from "~/lib/supa.server"



export const loader = async () => {
  let { data: audit, error } = await supabase
    .from('audit')
    .select('*')

  console.log(audit)
  return audit

}




export default function appIndex() {
  const data = useLoaderData()
  return (
    <div>
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="lg:hidden" to="#">
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex-1">
          <h1 className="font-semibold text-lg">At a glance</h1>
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

      <main className="flex-1 p-2 overflow-y-scroll">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">7 day inspections</CardTitle>
              {/* <DollarSignIcon className="w-4 h-4 text-gray-500" /> */}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34</div>
              <p className="text-xs text-gray-500">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">7 Day Trouble Calls</CardTitle>
              {/* <UsersIcon className="w-4 h-4 text-gray-500" /> */}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-gray-500">+56.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Open Trouble calls</CardTitle>
              {/* <CreditCardIcon className="w-4 h-4 text-gray-500" /> */}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-gray-500">+19% from last month</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Recent Annual Inspections</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150 px]">Date</TableHead>
                    <TableHead>Subdivision</TableHead>
                    <TableHead>Mile Post</TableHead>
                    <TableHead className="text-right">Location</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data.map(audit => (
                      <TableRow key={audit.id}>
                        <TableCell className="font-medium"><Link to={`/app/inspection/${audit.id}`}>{audit.selectedDate}</Link></TableCell>
                        <TableCell>{audit.subdivision}</TableCell>
                        <TableCell>{audit.milePost}</TableCell>
                        <TableCell className="text-right">{audit.location}</TableCell>
                      </TableRow>
                      ))}
                      {/* <TableRow>
                        <TableCell className="font-medium">{audit.milePost}</TableCell>
                        <TableCell>{audit.milePost}</TableCell>
                        <TableCell>{audit.milePost}y</TableCell>
                        <TableCell className="text-right">{audit.milePost}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">{audit.milePost}</TableCell>
                        <TableCell>{audit.milePost}</TableCell>
                        <TableCell>{audit.milePost}</TableCell>
                        <TableCell className="text-right">{audit.milePost}</TableCell>
                      </TableRow> */}
                  


                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>


    </div>

  )

}
