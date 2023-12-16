import { Outlet } from "@remix-run/react";
import { SideBar } from "~/components/side-bar";



export default function App() {
    return (
        <div>
            <SideBar />
           
            <Outlet />
            
        </div>
    )
};