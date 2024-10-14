import Link from "next/link";
import Button from "./ui/dashboardComp/Button";
import Card from "./ui/dashboardComp/Card";
import CardContent from "./ui/dashboardComp/CardContent";
import CardHeader from "./ui/dashboardComp/CardHeader";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Image from 'next/image';
import { memo } from 'react';

const OptimizedHeader = memo(() => (
  <header className="bg-primary text-primary-foreground py-4 px-6">
    <div className="container mx-auto flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
        <DollarSignIcon className="h-6 w-6" />
        <span>Finance Automation</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/pricing" className="hover:underline">
          Pricing
        </Link>
        <Link href="/post-sign" className="hover:underline">
          Dashboard
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button noStyle size="icon">
              Customers
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/atlas" className="hover:underline">
                Atlas
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/pierian" className="hover:underline">
                Pierian
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button noStyle size="icon">
              Products
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/invoice-automation" className="hover:underline">
                Invoice
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/order-automation" className="hover:underline">
                Order Automation
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/document-summarize" className="hover:underline">
                Document Management
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/support" className="hover:underline">
          Support
        </Link>
        <Link href="/register" className="hover:underline">
          Register
        </Link>
        <Link href="/login">
          <Button variant="outline">Sign In</Button>
        </Link>
        <Button >Get Started</Button>
      </nav>
      <Button variant="outline" size="icon" className="md:hidden">
        <MenuIcon className="h-6 w-6" />
      </Button>
    </div>
  </header>
));

const MainDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <OptimizedHeader />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Revolutionize Your Finance Automation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground mb-8">
              Streamline your financial processes with our AI-powered solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button style={{backgroundColor: "white", borderRadius: "3px"}} className="w-full sm:w-auto">Get Started</Button>
              <Button style={{backgroundColor: "white", borderRadius: "3px"}} variant="outline" className="w-full sm:w-auto">Learn More</Button>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-based Data Extraction and Classification</h2>
                <p className="text-muted-foreground mb-6">
                  Our advanced machine learning models automatically extract and categorize data from your financial
                  documents, saving you time and reducing errors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {renderCards([
                    { title: 'Invoice Extraction', description: 'Automatically extract and categorize data from invoices.', icon: FileIcon },
                    { title: 'Receipt Categorization', description: 'Classify expenses based on receipt data.', icon: ReceiptIcon },
                    { title: 'Anomaly Detection', description: 'Identify irregular patterns and potential fraud.', icon: PieChartIcon },
                    { title: 'Seamless Integrations', description: 'Connect with popular accounting and business tools.', icon: ImportIcon },
                  ])}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  width={500}
                  height={400}
                  alt="Finance Automation"
                  className="rounded-lg shadow-lg"
                  style={{ aspectRatio: "500/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Advanced Analytics and Reporting</h2>
            <p className="text-muted-foreground mb-8 text-center">
              Gain valuable insights and make data-driven decisions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {renderCards([
                { title: 'Comprehensive Dashboards', description: 'Visualize your financial data with intuitive dashboards.', icon: LayoutDashboardIcon },
                { title: 'Real-time Monitoring', description: 'Track your financial status and transactions in real-time.', icon: CheckIcon },
                { title: 'Scheduled Reports', description: 'Receive automated reports on your financial performance.', icon: TimerIcon },
                { title: 'Data Export', description: 'Export your financial data in various formats.', icon: ReplyIcon },
              ])}
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Companies</h2>
            <p className="text-muted-foreground mb-8">
              Our solution is trusted by industry leaders for their financial management needs.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {renderCompanyLogos([
                { alt: 'Company Logo 1', src: '/placeholder.svg' },
                { alt: 'Company Logo 2', src: '/placeholder.svg' },
                { alt: 'Company Logo 3', src: '/placeholder.svg' },
                { alt: 'Slack', src: '/placeholder.svg' },
                { alt: 'Salesforce', src: '/placeholder.svg' },
                { alt: 'Google', src: '/placeholder.svg' },
              ])}
            </div>
          </div>
        </section>
        <section className="bg-primary py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Start Your Free Trial Today</h2>
            <p className="text-muted-foreground mb-8">
              Sign up for a free trial and experience the benefits of finance automation firsthand.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button style={{backgroundColor: "white", borderRadius: "3px"}}  className="w-full sm:w-auto">Sign Up Now</Button>
              <Button style={{backgroundColor: "white", borderRadius: "3px"}}  variant="outline" className="w-full sm:w-auto">Contact Sales</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <DollarSignIcon className="h-6 w-6" />
            <span>Finance Automation</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">&copy; 2023 Finance Automation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const renderCards = (cards:any) => {
  return cards.map(({ title, description, icon: Icon}:any) => (
    <Card key={title} className="p-4 rounded-lg shadow-lg">
      <CardHeader>
        <Icon className="h-8 w-8 mb-2 text-primary" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  ));
};

const renderCompanyLogos = (logos:any) => {
  return logos.map(({ alt, src }:any) => (
    <Image key={alt} src={src} width={80} height={50} alt={alt} className="mx-auto grayscale" />
  ));
};

export default MainDashboard;




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


function DollarSignIcon(props: any) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function FileIcon(props: any) {
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


function ImportIcon(props: any) {
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
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  )
}


function LayoutDashboardIcon(props: any) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}

function MoveHorizontalIcon(props: any) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}



function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PieChartIcon(props: any) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}


function ReceiptIcon(props: any) {
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
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  )
}


function ReplyIcon(props: any) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  )
}


function TimerIcon(props: any) {
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
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}