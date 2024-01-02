
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "@remix-run/react"

export default function Tcard({ data }) {
  return (

    <Card className="bg-opacity-60 bg-white backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden max-w-md mx-auto p-4 space-y-4">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900">{data.student}</CardTitle>
        <Badge className="flex items-center space-x-1">

          <span className="text-sm text-gray-900">Record Saved</span>
        </Badge>
      </CardHeader>
      <CardContent className="text-gray-800 text-sm">
        <h2 className="font-semibold">
          {data.timeUnit} Minutes of {data.subject}
        </h2>
      </CardContent>
      <div className="flex items-center">
       
       
      </div>
      <Button className="w-full text-white bg-blue-500 hover:bg-blue-600">
       <Link to="/school/add">Go back</Link>
      
      </Button>
    </Card>

  )
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
