import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-[400px] mt-[30px] text-white rounded-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>Do you offer opportunities for student attachment or internships?</AccordionTrigger>
        <AccordionContent>
        Yes, we provide valuable attachment and internship opportunities for students seeking practical experience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger> How experienced is your team in handling research projects?</AccordionTrigger>
        <AccordionContent>
        Our team comprises seasoned professionals with extensive experience in academia and industry, ensuring high-quality research outcomes and actionable insights.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can you accommodate urgent research requests?</AccordionTrigger>
        <AccordionContent>
        Yes, we understand the importance of time-sensitive projects and have the flexibility to prioritize urgent requests while maintaining the rigor and accuracy of our research methodologies.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
  )
}
