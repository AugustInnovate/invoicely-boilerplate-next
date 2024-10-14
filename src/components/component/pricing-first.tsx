import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

export function PricingFirst() {

  const plans: any = [
    {
      title: "Free",
      price: "$0",
      period: "/ month",
      description: "Perfect for small teams and individuals.",
      features: ["1 user", "5 GB storage", "Basic analytics", "Email support"],
      buttonText: "Get Started",
    },
    {
      title: "Starter",
      price: "$29",
      period: "/ month",
      description: "Perfect for small teams and individuals.",
      features: ["1 user", "5 GB storage", "Basic analytics", "Email support"],
      buttonText: "Get Started",
    },
    {
      title: "Pro",
      price: "$99",
      period: "/ user / month",
      additionalInfo: "Volume discounts available",
      description: "Ideal for growing teams that need more advanced features and support.",
      features: ["Unlimited users", "50 GB storage", "Advanced analytics", "Priority email and chat support"],
      buttonText: "Get Started",
    },
    {
      title: "Enterprise",
      price: "Custom",
      additionalInfo: "Tailored to your business needs",
      description: "Designed for large organizations with complex requirements.",
      features: ["Dedicated account manager", "Unlimited storage", "Custom integrations and APIs", "24/7 priority support"],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <>
      <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Pricing</h1>
            <p className="text-muted-foreground">Choose the plan that's right for your business.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {plans.map((plan: any, index: any) => (
              <Card key={index} className="border-t-4 border-primary flex flex-col justify-between min-h-[400px]">
                <div className="flex-grow">
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                    {plan.additionalInfo && <p className="text-muted-foreground text-sm">{plan.additionalInfo}</p>}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{plan.description}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {plan.features.map((feature: any, featureIndex: any) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckIcon className="w-5 h-5 fill-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="flex justify-end">
                  <Button className="w-full">{plan.buttonText}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Annual Billing</h3>
                <p className="text-muted-foreground">Save 20% when you pay annually.</p>
              </div>
              <Button variant="outline">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Switch to Annual
              </Button>
            </div>
            <div className="grid gap-4 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium">Add-ons</h4>
                <p>Extend your plan with additional features and storage.</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <PlusIcon className="w-5 h-5 fill-primary" />
                      Extra 10 GB storage
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-medium">$5</span>
                      <span>/ month</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <PlusIcon className="w-5 h-5 fill-primary" />
                      Premium support
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-medium">$19</span>
                      <span>/ month</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Support</h4>
                <p>Get the help you need, when you need it.</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <WebcamIcon className="w-5 h-5 fill-primary" />
                      Email support
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-medium">Included</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="w-5 h-5 fill-primary" />
                      Priority chat and phone support
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-medium">$49</span>
                      <span>/ month</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-4">
            <Button variant="outline">Monthly</Button>
            <Button variant="outline">Annually (2 months free)</Button>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Additional Storage</CardTitle>
                <CardDescription>Expand your storage capacity as needed.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 grid gap-4">
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-bold">$5</div>
                  <div className="text-muted-foreground">/10 GB</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add Storage</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Additional Users</CardTitle>
                <CardDescription>Invite more team members to your account.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 grid gap-4">
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-bold">$10</div>
                  <div className="text-muted-foreground">/user</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add Users</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Premium Support</CardTitle>
                <CardDescription>Get dedicated support from our experts.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 grid gap-4">
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-bold">$99</div>
                  <div className="text-muted-foreground">/mo</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Premium Support</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="grid gap-4 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Pricing Comparison</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            See how our pricing compares to other popular solutions in the market.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">Our Solution</th>
                <th className="p-4 text-left">Competitor A</th>
                <th className="p-4 text-left">Competitor B</th>
                <th className="p-4 text-left">Competitor C</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Users</td>
                <td className="p-4">Unlimited</td>
                <td className="p-4">5</td>
                <td className="p-4">10</td>
                <td className="p-4">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Storage</td>
                <td className="p-4">Unlimited</td>
                <td className="p-4">100 GB</td>
                <td className="p-4">500 GB</td>
                <td className="p-4">1 TB</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Analytics</td>
                <td className="p-4">Advanced</td>
                <td className="p-4">Basic</td>
                <td className="p-4">Standard</td>
                <td className="p-4">Advanced</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Support</td>
                <td className="p-4">Dedicated</td>
                <td className="p-4">Email</td>
                <td className="p-4">Email + Chat</td>
                <td className="p-4">Phone + Email</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Pricing</td>
                <td className="p-4">$49/month</td>
                <td className="p-4">$29/month</td>
                <td className="p-4">$59/month</td>
                <td className="p-4">$99/month</td>
              </tr>
            </tbody>
          </table>
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Pricing Calculator</h2>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="users">Number of Users</Label>
                <Input type="number" id="users" min="1" defaultValue="1" />
              </div>
              <div>
                <Label htmlFor="features">Number of Features</Label>
                <Input type="number" id="features" min="1" defaultValue="1" />
              </div>
              <div>
                <Label htmlFor="transactions">Monthly Transactions</Label>
                <Input type="number" id="transactions" min="1" defaultValue="1" />
              </div>
              <div>
                <Label htmlFor="plan">Pricing Plan</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="billing">Billing Cycle</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a billing cycle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="annual">Annual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <Button className="w-full">Calculate</Button>
              </div>
            </form>
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4">Estimated Monthly Cost</h3>
              <div className="text-4xl font-bold">$99.99</div>
            </div>
          </div>
        </section>
      </div>
    </>
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


function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function PlusIcon(props: any) {
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
      <path d="M12 5v14" />
    </svg>
  )
}


function WebcamIcon(props: any) {
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
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}
