import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import TabsPage from "../UserDashboard";
import { Switch } from "./switch";
import { Button } from "./button";
import { Label } from "./label";

export function Settings() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="bg-background border-r flex flex-col w-64 p-6 space-y-6">
        <div className="flex items-center gap-2">
          <SettingsIcon className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Settings</h2>
        </div>
        <nav className="flex flex-col space-y-2">
          <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors">
            <PowerIcon className="w-5 h-5" />
            <span>General</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors">
            <LockIcon className="w-5 h-5" />
            <span>Security</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors">
            <MailsIcon className="w-5 h-5" />
            <span>Notifications</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors">
            <UserIcon className="w-5 h-5" />
            <span>User Management</span>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="user-management">
            <TabsList>
              <TabsTrigger value="user-management">User Management</TabsTrigger>
              <TabsTrigger value="system-integration">System Integration</TabsTrigger>
            </TabsList>
            <TabsContent value="user-management">
              <TabsPage />
            </TabsContent>
            <TabsContent value="system-integration">
              <Card>
                <CardHeader>
                  <CardTitle>User Integration</CardTitle>
                  <CardDescription>Connect and configure third-party services.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Analytics</CardTitle>
                        <CardDescription>Connect your analytics platform to track user behavior.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="analytics-platform">Analytics Platform</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select analytics platform" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="google-analytics">Google Analytics</SelectItem>
                                <SelectItem value="amplitude">Amplitude</SelectItem>
                                <SelectItem value="mixpanel">Mixpanel</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="tracking-id">Tracking ID</Label>
                            <Input id="tracking-id" placeholder="Enter tracking ID" />
                          </div>
                        </form>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button>Save</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CardContent>
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
                        <Label htmlFor="office365-integration">Office 365</Label>
                        <div className="flex items-center space-x-2">
                          <Switch id="office365-integration" />
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
                  <CardFooter className="flex justify-end">
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

// Icon components can be moved to a separate file if reused in multiple places





function FilePenIcon(props: any) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
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


function LockIcon(props: any) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MailsIcon(props: any) {
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
      <rect width="16" height="13" x="6" y="4" rx="2" />
      <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
      <path d="M2 8v11c0 1.1.9 2 2 2h14" />
    </svg>
  )
}


function PowerIcon(props: any) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
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


function TrashIcon(props: any) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export default Settings;