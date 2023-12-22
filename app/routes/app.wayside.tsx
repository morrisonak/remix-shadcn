

import { Link, useLoaderData } from "@remix-run/react"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { MoreHorizontalIcon } from "lucide-react"
import { supabase } from "~/lib/supa.server"
import { WaysideHeader } from "~/components/waysideHeader"


export const loader = async () => {
  let { data: Location, error } = await supabase
    .from('Location')
    .select('*')
    .eq('wayside', true)
  console.log(Location)
  return Location

}




export default function Orders() {
  const data = useLoaderData()
  return (
    <div>
      <WaysideHeader />



      <div className="border shadow-sm rounded-lg p-2 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Mile Post</TableHead>
              <TableHead className="min-w-[150px]">Description</TableHead>
              <TableHead className="hidden md:table-cell">Last Updated</TableHead>
              <TableHead className="text-right">Platform</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(location => (

              <TableRow key={location.id}>

                <TableCell className="font-medium">{location.milePost}</TableCell>
                <TableCell>{location.name}</TableCell>
                <TableCell className="hidden md:table-cell">
  {new Date(location.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}
</TableCell>

                <TableCell className="text-right">{location.platform}</TableCell>
                <TableCell className="hidden sm:table-cell">Active</TableCell>


                <TableCell className="text-right">

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Link to={`/app/${location.id}`}>View Location Details</Link></DropdownMenuItem>
                      <DropdownMenuItem>Customer details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>
    </div>

  )
}

