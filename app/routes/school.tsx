import { supabase } from "~/lib/supa.server";

import { ActionArgs, ActionFunction, redirect } from "@remix-run/node";
import { Homeschool } from "~/components/homeschool";


export let action: ActionFunction = async ({
    request,
  }: ActionArgs) => {
    const formData = await request.formData();
  
    const student = formData.get("student");
    const subject = formData.get("subject");
    const time = formData.get("time");
    const date = formData.get("date")
    console.log("the selected student:", student, subject, time, date)
   
    
const { data, error } = await supabase
.from('school')
.insert([
  { student: student, subject: subject, timeUnit: time, dateCompleted: date },
])
.select()

  
    return redirect("/School");
  };

  
  



export default function School() {
    return(

        <Homeschool />




    )
}