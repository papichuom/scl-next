
import {
  Card,
  CardContent,
  
} from "@/components/ui/card"

import Image from "next/image"

export default function General(){
  return <Card className="w-[400px] bg-transparent border-transparent  "> 
  <CardContent className="grid gap-4 h-[300px]">
  <div className="mx-auto my-1 mb-4 flex max-w-fit items-center  space-x-2 overflow-hidden rounded-full border border-zinc-400 bg-black px-4 py-2 shadow-md backdrop-blur transition-all hover:border-green-300 hover:bg-green/50">
    <p className="text-sm    text-slate-100">
      Research, Consultancy & Innovation centre
    </p>
  </div>

  <div className="text-center">
    <h1 className="pl-1 font-bold text-6xl my-1">
      <span className="text-blue-500">Linking </span>
      <span className="text-orange-500">Academia</span><br />
      <span className="text-slate-300 mx-">to</span>
      <span className="text-green-500"> Industry</span>
    </h1>
  </div>
  </CardContent>
</Card>
}