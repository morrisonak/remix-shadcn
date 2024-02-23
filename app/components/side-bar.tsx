
import { Link, Outlet } from "@remix-run/react"
import { Badge } from "@/components/ui/badge"
import { Package2Icon, HomeIcon, ShoppingCartIcon, PackageIcon, UsersIcon, LineChartIcon } from "~/components/icons"

export function SideBar() {
  return (
    <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
    <div className="hidden border-r bg-gray-50 lg:block dark:bg-gray-200">
      <div className="flex flex-col gap-2">
        <div className="flex h-[60px] items-center px-6">
          <Link className="flex items-center gap-2 font-semibold text-black dark:text-gray-900" to="./">
            <Package2Icon className="h-6 w-6" />
            <span>Signal Dashboard</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-black hover:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
              to="./"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2 text-black hover:bg-gray-200 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
              to="wayside"
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Wayside
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">12</Badge>
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-black hover:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
              to="crossings"
            >
              <PackageIcon className="h-4 w-4" />
              Crossings
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-black hover:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
              to="form"
            >
              <UsersIcon className="h-4 w-4" />
              Add Annual Inspection
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-black hover:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
              to="active"
            >
              <LineChartIcon className="h-4 w-4" />
              Active Monitoring
            </Link>
          </nav>
        </div>
      </div>
    </div>
    <div className="flex flex-col overflow-auto">
      <Outlet />
    </div>
  </div>
  
  )
}


