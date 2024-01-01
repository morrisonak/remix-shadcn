
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { format } from "date-fns"
import { Form } from "@remix-run/react";





import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export function Homeschool() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="bg-gray-800 text-white min-h-screen"> {/* Dark background */}
      <header className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <h1 className="text-2xl font-semibold">Homeschool Tracker</h1>
        <Avatar className="w-8 h-8" />
      </header>
      <main className="p-4">
        <div className="space-y-4">
          {/* Select components for Student, Subject, and Time Period */}
         <Form method="post">
         
          <Select name="student">
            <SelectTrigger className="w-full bg-gray-700 border border-gray-600">
              <SelectValue placeholder="Select Student" />
            </SelectTrigger>
            
            <SelectContent >
              <SelectItem value="Grant Morrison">Grant Morrison</SelectItem>
              <SelectItem value="Micah Morrison">Micah Morrison</SelectItem>
              <SelectItem value="Aaron Morrison">Aaron Morrison</SelectItem>
             
            </SelectContent>
           
          </Select>
       

          <Select name="subject">
            <SelectTrigger className="w-full bg-gray-700 border border-gray-600">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">Math</SelectItem>
              <SelectItem value="reading">Reading</SelectItem>
              <SelectItem value="writing">Writing</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="history">History</SelectItem>
            </SelectContent>
          </Select>

          <Select name="time">
            <SelectTrigger className="w-full bg-gray-700 border border-gray-600">
              <SelectValue placeholder="Select Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20">20 Minutes</SelectItem>
              <SelectItem value="30">30 Minutes</SelectItem>
              <SelectItem value="60">60 Minutes</SelectItem>
            </SelectContent>
          </Select>

          {/* Popover for Calendar */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-full justify-start text-left font-normal bg-gray-700 border border-gray-600">
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                {date ? format(date, "PPP") : <span>Select Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0 bg-gray-700 border border-gray-600">
              <Calendar initialFocus mode="single"
                selected={date}
                onSelect={setDate} />
            </PopoverContent>
          </Popover>
          <input type="hidden" id="selectedDate" name="date" value={date ? format(date, "yyyy-MM-dd") : ''} />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </Button>
          </Form>
        </div>
      </main>
      <nav className="fixed inset-x-0 bottom-0 bg-gray-700 p-4 flex justify-around"> {/* Fixed bottom navbar */}
        {/* Navigation items here */}
      </nav>
    </div>
  )
}


function CalendarDaysIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
