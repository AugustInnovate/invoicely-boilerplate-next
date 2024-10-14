import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const integrations = [
  {
    title: "Mailchimp",
    description: "Connect your Mailchimp account to sync contacts and campaigns.",
    fields: [
      { label: "API Key", id: "mailchimp-api-key", type: "text" },
      { label: "List ID", id: "mailchimp-list-id", type: "text" },
      {
        label: "Sync Frequency",
        id: "mailchimp-sync-frequency",
        type: "select",
        options: ["Daily", "Weekly", "Monthly"],
      },
    ],
  },
  {
    title: "Google Calendar",
    description:
      "Connect your Google Calendar to sync events and appointments.",
    fields: [
      { label: "API Key", id: "google-calendar-api-key", type: "text" },
      {
        label: "Sync Frequency",
        id: "google-calendar-sync-frequency",
        type: "select",
        options: ["Daily", "Weekly", "Monthly"],
      },
      {
        label: "Sync Direction",
        id: "google-calendar-sync-direction",
        type: "select",
        options: ["Both Ways", "From CRM to Calendar", "From Calendar to CRM"],
      },
    ],
  },
  {
    title: "Salesforce",
    description:
      "Connect your Salesforce account to sync leads, contacts, and opportunities.",
    fields: [
      { label: "Username", id: "salesforce-username", type: "text" },
      { label: "Password", id: "salesforce-password", type: "password" },
      {
        label: "Sync Frequency",
        id: "salesforce-sync-frequency",
        type: "select",
        options: ["Daily", "Weekly", "Monthly"],
      },
      {
        label: "Sync Direction",
        id: "salesforce-sync-direction",
        type: "select",
        options: ["Both Ways", "From CRM to Salesforce", "From Salesforce to CRM"],
      },
    ],
  },
  {
    title: "Zapier",
    description:
      "Connect your Zapier account to automate workflows between your CRM and other apps.",
    fields: [
      { label: "API Key", id: "zapier-api-key", type: "text" },
      { label: "Zap ID", id: "zapier-zap-id", type: "text" },
      {
        label: "Sync Frequency",
        id: "zapier-sync-frequency",
        type: "select",
        options: ["Real-time", "Daily", "Weekly"],
      },
    ],
  },
  {
    title: "Hubspot",
    description: "Connect your Hubspot account to sync contacts and campaigns.",
    fields: [
      { label: "API Key", id: "hubspot-api-key", type: "text" },
      {
        label: "Sync Frequency",
        id: "hubspot-sync-frequency",
        type: "select",
        options: ["Daily", "Weekly", "Monthly"],
      },
      {
        label: "Sync Direction",
        id: "hubspot-sync-direction",
        type: "select",
        options: ["Both Ways", "From CRM to Hubspot", "From Hubspot to CRM"],
      },
    ],
  },
  {
    title: "Payment Processor",
    description: "Connect your payment processor to handle transactions.",
    fields: [
      {
        label: "Processor",
        id: "payment-processor",
        type: "select",
        options: ["Stripe", "PayPal", "Braintree"],
      },
      { label: "API Key", id: "payment-api-key", type: "text" },
      { label: "Secret Key", id: "payment-secret-key", type: "text" },
    ],
  },
];

const Integrations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {integrations.map((integration, index) => (
        <Card key={index} className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <CardHeader>
              <CardTitle>{integration.title}</CardTitle>
              <CardDescription>{integration.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {integration.fields.map((field, idx) => (
                <div key={idx} className="mb-4">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  {field.type === "text" && (
                    <Input id={field.id} type="text" placeholder={field.label} />
                  )}
                  {field.type === "password" && (
                    <Input id={field.id} type="password" placeholder={field.label} />
                  )}
                  {field.type === "select" && (
                    <Select>
                      <SelectTrigger id={field.id}>
                        <SelectValue placeholder={`Select ${field.label}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {field && field.options &&  field?.options.map((option, optIdx) => (
                          <SelectItem key={optIdx} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              ))}
            </CardContent>
          </div>
          <CardFooter className="mt-auto">
            <Button className="w-full">Connect</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Integrations;


function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function DatabaseIcon(props: any) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function HandHelpingIcon(props: any) {
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
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </svg>
  )
}


function InboxIcon(props: any) {
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}


function LayersIcon(props: any) {
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}


function Package2Icon(props: any) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
