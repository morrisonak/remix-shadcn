import { supabase } from "~/lib/supa.server";

import { ActionArgs, ActionFunction, redirect } from "@remix-run/node";
import { Homeschool } from "~/components/homeschool";
import { Link, Outlet } from "@remix-run/react";

import { Avatar } from "@/components/ui/avatar"








export default function School() {
    return (

        <div className="bg-gray-800 text-white min-h-screen"> {/* Dark background */}
            <header className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                <h1 className="text-2xl font-semibold">Homeschool Tracker</h1>
                <Avatar className="w-8 h-8" />
            </header>
            <main className="p-4">
                <Outlet />
            </main>
            <nav className="fixed inset-x-0 bottom-0 bg-gray-700 p-2 flex justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to="/school">
                        Home
                    </Link></button>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to="./add">
                        Add New Record
                    </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to="./view-records">
                        View Records
                    </Link>
                </button>
            </nav>


        </div>

    )
}