import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="flex justify-center py-12 px-4 bg-black min-h-screen">
      <Card className="w-full max-w-3xl shadow-sm border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">
            Privacy Policy
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Last updated: April 29, 2026
          </p>
        </CardHeader>
        <CardContent>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. Information Collection</AccordionTrigger>
              <AccordionContent>
                We collect information you provide directly to us, including
                name, email, and automated usage data when you access our
                services at https://leads-automation-system.vercel.app/.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. Data Usage</AccordionTrigger>
              <AccordionContent>
                Your data is used to provide and improve our lead automation
                services, detect fraudulent transactions, and communicate
                product updates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. Your Rights</AccordionTrigger>
              <AccordionContent>
                You have the right to access, correct, or delete your personal
                data at any time by contacting our support team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
