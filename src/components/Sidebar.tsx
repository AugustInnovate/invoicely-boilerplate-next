import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Sliders, BarChart, CreditCard, Plug, DollarSign, Settings, PlusCircle } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <span className="text-2xl font-bold text-gray-800 dark:text-white">SaasApp</span>
        <Button variant="ghost" size="icon">
          <PlusCircle className="h-5 w-5" />
        </Button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/post-sign" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <LayoutDashboard className="h-5 w-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/atlas" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <Sliders className="h-5 w-5 mr-3" />
              Process
            </Link>
          </li>
          <li>
            <Link href="/analytics" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <BarChart className="h-5 w-5 mr-3" />
              Analytics
            </Link>
          </li>
          <li>
            <Link href="/report" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <CreditCard className="h-5 w-5 mr-3" />
              Report
            </Link>
          </li>
          <li>
            <Link href="/system-integration" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <Plug className="h-5 w-5 mr-3" />
              Integrations
            </Link>
          </li>
          <li>
            <Link href="/audit-and-logging" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <DollarSign className="h-5 w-5 mr-3" />
              Log
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
