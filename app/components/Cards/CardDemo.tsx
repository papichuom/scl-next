import * as React from "react"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SheetDemo } from "../sheet/Sheet"
import Image from "next/image"




export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <Image  src="/feather-pen-3.png" width={350} height={100} alt="card" className="rounded-lg"/>
    </Card>
  )
}
export function CardWith() {
  return (
    <Card className="w-[350px]">
      <Image  src="/res.png" width={350} height={100} alt="card" className="rounded-lg"/>
    </Card>
  )
}
export function CardW() {
  return (
    <Card className="w-[350px]">
      <Image  src="/cons.png" width={350} height={100} alt="card" className="rounded-lg"/>
    </Card>
  )
}
