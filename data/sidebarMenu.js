import {
  Airplay,
  BarChart,
  CreditCard,
  Grid,
  Layout,
  Lock,
  MapPin,
  UserPlus,
  Users,
} from "react-feather";

export const SidebarMenuItem = [
  {
    title: "Dashboard",
    icon: <Airplay />,
    type: "link",
    path: "/dashboard",
  },
  {
    title: "My Properies",
    icon: <Grid />,
    type: "sub",
    children: [
      {
        path: "/myproperties/add-property",
        title: "Add Propery",
        type: "link",
      },
      {
        path: "/myproperties/edit-property",
        title: "Edit Propery",
        type: "link",
      },
      {
        path: "/myproperties/propertylist",
        title: "Property List",
        type: "link",
      },
      {
        path: "/myproperties/favourites",
        title: "Favourites",
        type: "link",
      },
    ],
  },
  {
    title: "Manage users",
    icon: <Users />,
    type: "sub",
    children: [
      {
        path: "/manage-users/profile",
        title: "Profile",
        type: "link",
      },
      {
        path: "/manage-users/allusers",
        title: "All Users",
        type: "link",
      },
    ],
  },
  {
    title: "Agents",
    icon: <UserPlus />,
    type: "sub",
    children: [
      {
        path: "/agents/profile",
        title: "Profile",
        type: "link",
      },
      {
        path: "/agents/add-agent",
        title: "Add Agent",
        type: "link",
      },
      {
        path: "/agents/edit-agent",
        title: "Edit Agent",
        type: "link",
      },
      {
        path: "/agents/all-agents",
        title: "All Agents",
        type: "link",
      },
      {
        path: "/agents/invoice",
        title: "Invoice",
        type: "link",
      },
    ],
  },
];
