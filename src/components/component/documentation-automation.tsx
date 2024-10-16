/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function DocumentationAutomation() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <FileIcon className="h-6 w-6" />
          <span className="sr-only">Document Summarization</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock the Power of Document Summarization
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our AI-powered document summarization tool extracts key insights, analyzes sentiment, and generates
                    concise summaries to help you make informed decisions faster.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="text-sm flex items-start md:items-center gap-4 p-4 rounded-lg">
                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
                  <TextIcon className="w-5 h-5" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Text Extraction</h3>
                  <p className="text-muted-foreground">
                    Accurately extract key text from any document, including PDFs, Word files, and more.
                  </p>
                </div>
              </div>
              <div className="text-sm flex items-start md:items-center gap-4 p-4 rounded-lg">
                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
                  <SendIcon className="w-5 h-5" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Sentiment Analysis</h3>
                  <p className="text-muted-foreground">
                    Understand the overall sentiment and emotion expressed in your documents.
                  </p>
                </div>
              </div>
              <div className="text-sm flex items-start md:items-center gap-4 p-4 rounded-lg">
                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
                  <InfoIcon className="w-5 h-5" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Key Insights</h3>
                  <p className="text-muted-foreground">
                    Quickly identify the most important information and trends in your documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Customer Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from the people who have used our document summarization tool to streamline their workflows and
                make better decisions.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">
                    &quot;This tool has been a game-changer for our team. The insights it provides are invaluable.&quot;
                  </p>
                  <cite className="mt-4 block text-sm font-normal text-muted-foreground not-italic">
                    - John Doe, CEO at Acme Corp
                  </cite>
                </blockquote>
                <blockquote>
                  <p className="text-lg font-medium">
                    &quot;I can&apos;t imagine going back to manually reviewing documents. The time savings are incredible.&quot;
                  </p>
                  <cite className="mt-4 block text-sm font-normal text-muted-foreground not-italic">
                    - Jane Smith, Director of Research at XYZ Inc
                  </cite>
                </blockquote>
              </div>
              <Image
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Testimonials"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Flexible Pricing to Fit Your Needs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that works best for your organization, with options for individuals, teams, and
                enterprises.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="p-6 space-y-4 bg-background border">
                <CardHeader>
                  <CardTitle>Individual</CardTitle>
                  <CardDescription>For personal use</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="text-sm text-muted-foreground">Unlimited document summarizations</li>
                    <li className="text-sm text-muted-foreground">Access to sentiment analysis</li>
                    <li className="text-sm text-muted-foreground">Key insights generation</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              <Card className="p-6 space-y-4 bg-background border">
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                  <CardDescription>For small teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="text-sm text-muted-foreground">Unlimited document summarizations</li>
                    <li className="text-sm text-muted-foreground">Access to sentiment analysis</li>
                    <li className="text-sm text-muted-foreground">Key insights generation</li>
                    <li className="text-sm text-muted-foreground">Collaborative features</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              <Card className="p-6 space-y-4 bg-background border">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="text-sm text-muted-foreground">Unlimited document summarizations</li>
                    <li className="text-sm text-muted-foreground">Access to sentiment analysis</li>
                    <li className="text-sm text-muted-foreground">Key insights generation</li>
                    <li className="text-sm text-muted-foreground">Dedicated account manager</li>
                    <li className="text-sm text-muted-foreground">Priority support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


function CheckIcon(props:any) {
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


function FileIcon(props:any) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function InfoIcon(props:any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function SendIcon(props:any) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function TextIcon(props:any) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}
