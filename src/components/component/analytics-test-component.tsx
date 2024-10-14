'use client'
// Import necessary modules from react-chartjs-2 and chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line, Pie } from "react-chartjs-2";

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

// Custom Icons (Imported or locally defined icons)
import PercentIcon from "@/components/icons/PercentIcon";
import TimerIcon from "../icons/TimerIcon"
import DollarSignIcon from "../icons/DollarSignIcon"
import MountainIcon from "../icons/MountainIcon"
import Link from "next/link";
import { Input } from "../ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import UsersIcon from "../icons/UserIcon";
import AnalyticsCard from '../analytics-component/AnalyticsCard';
import { cardActionAreaClasses } from '@mui/material';
import { Description } from '@radix-ui/react-dialog';
import Image from 'next/image';

export default function AnalyticsComponent() {
  // Line chart data
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Users",
        data: [4000, 3000, 5000, 4500, 6000],
        borderColor: "#8884d8",
        fill: false,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const lineBendedChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Pie chart data
  const pieChartData = {
    labels: ["Group A", "Group B", "Group C", "Group D"],
    datasets: [
      {
        data: [400, 300, 300, 200],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF9F40"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF9F40"],
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };


  const cardObj = [
    {
      id: 1,
      title: "Total Users",
      number: "1,643",
      description: "+26.3% from last month"
    },
    {
      id: 2,
      title: "Total Users",
      number: "1,643",
      description: "+26.3% from last month"
    },
    {
      id: 3,
      title: "Total Users",
      number: "1,643",
      description: "+26.3% from last month"
    },
    {
      id: 4,
      title: "Total Users",
      number: "1,643",
      description: "+26.3% from last month"
    },
    {
      id: 5,
      title: "Total Users",
      number: "1,643",
      description: "+26.3% from last month"
    }
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Header Section */}
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        {/* Logo Link */}
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Analytics</span>
        </Link>

        {/* Search Input */}
        <div className="relative flex-1 mt-6">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>

        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Image
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
                style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:px-6 sm:py-0 md:p-10">
          {/* Metrics Cards */}
          <div className="flex flex-col gap-4 md:flex-row mt-5">
            {cardObj && cardObj.map((card: any) => <AnalyticsCard  key={card.id}  title={card.title} number={card.number} description={card.description} />)}
          </div>
          <div className="flex flex-col gap-4 md:flex-row mt-5">
            {cardObj && cardObj.map((card: any) => <AnalyticsCard  key={card.id}  title={card.title} number={card.number} description={card.description} />)}
          </div>

          <div className='flex flex-col gap-2 md:flex-row'>
            <Card className="mt-4 w-[50%]">
              <CardHeader>
                <CardTitle>Users Activity</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <Line data={lineChartData} options={lineChartOptions} />
              </CardContent>
            </Card>
            <Card className="mt-4 w-[50%]">
              <CardHeader>
                <CardTitle>Users Activity</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <Line data={lineChartData} options={lineChartOptions} />
              </CardContent>
            </Card>
          </div>


          <div className='flex flex-col gap-2 md:flex-row'>

          {/* Pie Chart */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>User Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <Pie data={pieChartData} options={pieChartOptions} />
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>User Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <Pie data={pieChartData} options={pieChartOptions} />
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>User Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <Pie data={pieChartData} options={pieChartOptions} />
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>User Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <Pie data={pieChartData} options={pieChartOptions} />
            </CardContent>
          </Card>
          </div>

          {/* Top Performing Campaigns Chart */}
          {/* Add the following section to include the chart from the provided image */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Top Performing Campaigns</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  datasets: [
                    {
                      label: "Campaigns",
                      data: [5000, 4000, 6000, 3000, 5000, 4000],
                      borderColor: "#00b894",
                      fill: false,
                      tension: 0.4, // Curved line
                    },
                  ],
                }}
                options={lineBendedChartOptions}
              />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
