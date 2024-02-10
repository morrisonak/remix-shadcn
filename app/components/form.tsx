import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form } from "@remix-run/react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Calendar } from "./ui/calendar"
import { useState } from "react"
import { format } from "date-fns"
import { CalendarDaysIcon } from "~/components/icons"

export default function Forms() {
    const [date, setDate] = useState<Date>()
    return (
        <Card>
            <CardHeader>
                <CardTitle>Annual signal Asset Inspection</CardTitle>
                <CardDescription>
                    Complete the form below as part of the required 360 day inspection.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form method="post" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">



                        <div className="space-y-2 ">
                            <Label htmlFor="Select-date"></Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button className="font-normal w-full md:w-1/2 lg:w-64 border border-gray-600">
                                        <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                                        {date ? format(date, "PPP") : <span>Select Date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent align="start" className="w-auto p-0  border border-gray-600">
                                    <Calendar initialFocus mode="single"
                                        selected={date}
                                        onSelect={setDate} />
                                </PopoverContent>
                            </Popover>
                            <input type="hidden" id="selectedDate" name="date" value={date ? format(date, "yyyy-MM-dd") : ''} />
                        </div>
                    </div>


                    <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input className="w-full md:w-1/2 lg:w-64" id="first-name" name="first-name" placeholder="Enter your first name" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input className="w-full md:w-1/2 lg:w-64" id="last-name" name="last-name" placeholder="Enter your last name" />
                    </div>


                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input className="w-full md:w-1/2 lg:w-64" id="email" name="email" placeholder="Enter your email" type="email" />





                        <div className="space-y-2">
                            <Label htmlFor="subdivision">Subdivision</Label>
                            <Select name="subdivision">
                                <SelectTrigger className="w-full md:w-1/2 lg:w-64 border border-gray-600">
                                    <SelectValue placeholder="Select Subdivision" />
                                </SelectTrigger>

                                <SelectContent >
                                    <SelectItem value="Central">Central</SelectItem>
                                    <SelectItem value="East">East</SelectItem>
                                    <SelectItem value="West">West</SelectItem>

                                </SelectContent>

                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="last-name">Mile Post</Label>
                            <Input className="w-full md:w-1/2 lg:w-64" id="mile-post" name="mile-post" placeholder="Enter the Mile Post" />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="location-name">Location Name</Label>
                            <Input className="w-full md:w-1/2 lg:w-64" id="location-name" name="location-name" placeholder="Enter location name" />
                        </div>

                     

                        <div className="space-y-2">
                            <Label htmlFor="revision">Revision Level of circuit plans</Label>
                            <Input className="w-full md:w-1/2 lg:w-64" id="revision" name="revision" placeholder="revision level" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="markups">Confirm Circuit plans have no markups</Label>
                            <Input className="w-full md:w-1/2 lg:w-64" id="markups" name="markups" placeholder="markups" />
                        </div>
                    </div>






                    <div className="space-y-2">
                        <Label htmlFor="message">Addtional Notes</Label>
                        <Textarea className="min-h-[100px] w-full md:w-1/2 lg:w-64" id="message" name="message" placeholder="Enter your notes" />
                    </div>
                    <Button className="w-full md:w-64">Submit</Button>
                </Form>
            </CardContent>
        </Card>
    )
} 