'use client';
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Sample data for users
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    roles: ["Admin", "Manager"],
    groups: ["Marketing", "Sales"],
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    roles: ["User"],
    groups: ["Design", "Development"],
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    roles: ["Editor"],
    groups: ["Content", "SEO"],
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 4,
    name: "Sarah Lee",
    email: "sarah@example.com",
    roles: ["Admin"],
    groups: ["HR", "Recruitment"],
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david@example.com",
    roles: ["Manager"],
    groups: ["Operations", "Logistics"],
    avatar: "/placeholder-user.jpg",
  },
];

// Sample data for roles
const roles = [
  {
    id: 1,
    name: "Admin",
    permissions: ["Create Users", "Update Users", "Delete Users", "Manage Roles", "Manage Groups", "Manage Policies"],
  },
  {
    id: 2,
    name: "User",
    permissions: ["View Users", "Update Profile"],
  },
  {
    id: 3,
    name: "Editor",
    permissions: ["Edit Content", "Publish Content"],
  },
  {
    id: 4,
    name: "Manager",
    permissions: ["View Reports", "Manage Teams"],
  },
];

// Sample data for groups
const groups = [
  {
    id: 1,
    name: "Marketing",
    members: [
      { name: "John Doe", avatar: "/placeholder-user.jpg", initials: "JD" },
      { name: "Olivia Davis", avatar: "/placeholder-user.jpg", initials: "OD" },
      { name: "Sophia Miller", avatar: "/placeholder-user.jpg", initials: "SM" },
    ],
  },
  {
    id: 2,
    name: "Sales",
    members: [
      { name: "Michael Brown", avatar: "/placeholder-user.jpg", initials: "MB" },
      { name: "Isabella Wilson", avatar: "/placeholder-user.jpg", initials: "IW" },
    ],
  },
  {
    id: 3,
    name: "Design",
    members: [
      { name: "Jane Smith", avatar: "/placeholder-user.jpg", initials: "JS" },
      { name: "Ella Williams", avatar: "/placeholder-user.jpg", initials: "EW" },
    ],
  },
  {
    id: 4,
    name: "HR",
    members: [
      { name: "Sarah Lee", avatar: "/placeholder-user.jpg", initials: "SL" },
      { name: "Liam Johnson", avatar: "/placeholder-user.jpg", initials: "LJ" },
    ],
  },
];

// Sample data for policies
const policies = [
  {
    id: 1,
    name: "Allow Admin Access",
    description: "Grants full access to all resources for users with the Admin role.",
    conditions: ["Role = Admin"],
  },
  {
    id: 2,
    name: "Read-Only Access",
    description: "Allows read-only access to resources.",
    conditions: ["Role = User"],
  },
  {
    id: 3,
    name: "Editor Access",
    description: "Allows editing and publishing of content for users with the Editor role.",
    conditions: ["Role = Editor"],
  },
  {
    id: 4,
    name: "Manager Access",
    description: "Allows viewing of reports and management of teams for users with the Manager role.",
    conditions: ["Role = Manager"],
  },
];

function UserTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Roles</TableHead>
          <TableHead>Groups</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center">
                <Avatar className="w-8 h-8 mr-2">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                {user.name}
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.roles.join(", ")}</TableCell>
            <TableCell>{user.groups.join(", ")}</TableCell>
            <TableCell>
              <ActionMenu userId={user.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function RoleTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Permissions</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.id}>
            <TableCell>{role.name}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission, index) => (
                  <Badge key={index} variant="outline">
                    {permission}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <ActionMenu />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function GroupTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Members</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {groups.map((group) => (
          <TableRow key={group.id}>
            <TableCell>{group.name}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                {group.members.map((member, index) => (
                  <Avatar key={index} className="w-6 h-6 border">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <ActionMenu />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function PolicyTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Conditions</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {policies.map((policy) => (
          <TableRow key={policy.id}>
            <TableCell>{policy.name}</TableCell>
            <TableCell>{policy.description}</TableCell>
            <TableCell>{policy.conditions.join(", ")}</TableCell>
            <TableCell>
              <ActionMenu />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function ActionMenu({ userId }: { userId?: number }) {
  const handleEditClick = () => {
    if (userId) {
      window.location.assign(`users/${userId}/edit-user`);
    } else {
      console.log("Edit clicked");
    }
  };

  const handleDeleteClick = () => {
    console.log("Delete clicked");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoveHorizontalIcon className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleEditClick}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handleDeleteClick}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function TabsPage() {
  return (
    <Tabs defaultValue="users" className="w-full">
      <TabsList className="justify-start">
        <TabsTrigger value="users">Users</TabsTrigger>
        <TabsTrigger value="roles">Roles</TabsTrigger>
        <TabsTrigger value="groups">Groups</TabsTrigger>
        <TabsTrigger value="policies">Policies</TabsTrigger>
      </TabsList>
      <TabsContent value="users">
        <div className="flex justify-end mb-4">
          <Link href="/users/new-user">
            <Button>Create New User</Button>
          </Link>
        </div>
        <UserTable />
      </TabsContent>
      <TabsContent value="roles">
        <div className="flex justify-end mb-4">
          <Link href="/roles/new-role">
            <Button>Create New Role</Button>
          </Link>
        </div>
        <RoleTable />
      </TabsContent>
      <TabsContent value="groups">
        <div className="flex justify-end mb-4">
          <Link href="/groups/new-group">
            <Button>Create New Group</Button>
          </Link>
        </div>
        <GroupTable />
      </TabsContent>
      <TabsContent value="policies">
        <div className="flex justify-end mb-4">
          <Link href="/policies/new-policy">
            <Button>Create New Policy</Button>
          </Link>
        </div>
        <PolicyTable />
      </TabsContent>
    </Tabs>
  );
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
