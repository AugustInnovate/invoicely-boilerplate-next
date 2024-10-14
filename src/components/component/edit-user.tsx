import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export function EditUser() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] gap-6 max-w-6xl w-full mx-auto p-4 md:p-10">
        <nav className="text-sm text-muted-foreground grid gap-4">
          <Link href="#" className="font-semibold text-primary" prefetch={false}>
            User Administration
          </Link>
          <Link href="#" className="font-semibold text-muted-foreground" prefetch={false}>
            Oauth Authentication
          </Link>
        </nav>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
              <CardDescription>Manage your account information and settings.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t p-6">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Oauth Authentication</CardTitle>
              <CardDescription>Connect and configure integrations with external services.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="google-integration">Google Integration</Label>
                  <div className="flex items-center space-x-2">
                    <Switch id="google-integration" />
                    <span>Connect Google Account</span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="slack-integration">Office 365</Label>
                  <div className="flex items-center space-x-2">
                    <Switch id="slack-integration" />
                    <span>Connect Office 365</span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="github-integration">GitHub Integration</Label>
                  <div className="flex items-center space-x-2">
                    <Switch id="github-integration" />
                    <span>Connect GitHub Account</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-6">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

function FrameIcon(props: any) {
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
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}
