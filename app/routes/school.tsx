

import { ActionArgs, ActionFunction } from "@remix-run/node";
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
    //await createPost({ title, slug, markdown });
  
    return null;
  };

  
  



export default function School() {
    return(

        <Homeschool />




    )
}