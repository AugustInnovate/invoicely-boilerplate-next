'use client'
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

interface Filters {
  user: string;
  action: string;
  dateRange: { start: Date | null; end: Date | null }; // Ensure date can be Date or null
}

export function AuditAndLogging() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState<Filters>({
    user: "",
    action: "",
    dateRange: { start: null, end: null },
  })

  const auditLogs = useMemo(() => [
    {
      id: 1,
      date: "2023-05-01",
      time: "10:30 AM",
      user: "John Doe",
      action: "Created new user account",
    },
    {
      id: 2,
      date: "2023-05-02",
      time: "2:15 PM",
      user: "Jane Smith",
      action: "Updated product pricing",
    },
    {
      id: 3,
      date: "2023-05-03",
      time: "9:45 AM",
      user: "Bob Johnson",
      action: "Deleted customer record",
    },
    {
      id: 4,
      date: "2023-05-04",
      time: "4:20 PM",
      user: "Alice Williams",
      action: "Approved order request",
    },
    {
      id: 5,
      date: "2023-05-05",
      time: "11:00 AM",
      user: "Tom Davis",
      action: "Logged in to admin dashboard",
    },
  ], [])

  const filteredLogs = useMemo(() => {
    return auditLogs.filter((log) => {
      const { user, action, dateRange } = filters
      const { start, end } = dateRange
      const logDate = new Date(log.date)

      return (
        log.user.toLowerCase().includes(user.toLowerCase()) &&
        log.action.toLowerCase().includes(action.toLowerCase()) &&
        (!start || logDate >= start) && // Check for start
        (!end || logDate <= end) // Check for end
      )
    }).filter(
      (log) =>
        log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [auditLogs, filters, searchTerm])

  return (
    <div className="flex flex-col h-full">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Audit & Logging</h1>
      </header>
      <div className="flex-1 p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-full"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <FilterIcon className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-4 space-y-2">
              <div className="space-y-1">
                <label htmlFor="user-filter" className="text-sm font-medium">User</label>
                <Input
                  id="user-filter"
                  type="text"
                  placeholder="Enter username"
                  value={filters.user}
                  onChange={(e) => setFilters((prev) => ({ ...prev, user: e.target.value }))}/>
              </div>
              <div className="space-y-1">
                <label htmlFor="action-filter" className="text-sm font-medium">Action</label>
                <Input
                  id="action-filter"
                  type="text"
                  placeholder="Enter action"
                  value={filters.action}
                  onChange={(e) => setFilters((prev) => ({ ...prev, action: e.target.value }))}/>
              </div>
              <div className="space-y-1">
                <label htmlFor="date-filter" className="text-sm font-medium">Date Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="date-filter"
                    type="date"
                    value={filters.dateRange.start ? filters.dateRange.start.toISOString().split("T")[0] : ""}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        dateRange: { ...prev.dateRange, start: e.target.value ? new Date(e.target.value) : null },
                      }))}/>
                  <Input
                    type="date"
                    value={filters.dateRange.end ? filters.dateRange.end.toISOString().split("T")[0] : ""}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        dateRange: { ...prev.dateRange, end: e.target.value ? new Date(e.target.value) : null },
                      }))}/>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.time}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function FilterIcon(props: any) {
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
      strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

function SearchIcon(props: any) {
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
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
