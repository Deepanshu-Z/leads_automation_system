import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="flex justify-center py-12 px-4 bg-black min-h-screen">
      <Card className="w-full max-w-3xl shadow-sm border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">
            Terms of Service
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Effective Date: April 29, 2026
          </p>
        </CardHeader>
        <CardContent>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. Acceptance of Terms</AccordionTrigger>
              <AccordionContent>
                By using the Leads Automation System, you agree to these terms.
                If you do not agree, please do not use our services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. User Obligations</AccordionTrigger>
              <AccordionContent>
                Users are responsible for maintaining the confidentiality of
                their account and for all activities that occur under their
                credentials.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. Limitation of Liability</AccordionTrigger>
              <AccordionContent>
                The service is provided "as is." We are not liable for any
                direct or indirect damages arising from your use of the
                automated system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
