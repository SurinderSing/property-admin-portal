import { Airplay, Grid, UserPlus, Users, MessageCircle } from "react-feather";

export const SidebarMenuItem = [
  {
    title: "Dashboard",
    icon: <Airplay />,
    type: "link",
    path: "/dashboard",
  },
  {
    title: "Properies",
    icon: <Grid />,
    type: "sub",
    children: [
      {
        path: "/properties/add-property",
        title: "Add Propery",
        type: "link",
      },
      {
        path: "/properties/propertylist",
        title: "Property List",
        type: "link",
      },
    ],
  },
  {
    title: "Manage users",
    icon: <Users />,
    type: "sub",
    children: [
      // {
      //   path: "/manage-users/profile",
      //   title: "Profile",
      //   type: "link",
      // },
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
        path: "/agents/add-agent",
        title: "Add Agent",
        type: "link",
      },
      {
        path: "/agents/all-agents",
        title: "All Agents",
        type: "link",
      },
    ],
  },

  {
    title: "Messages",
    icon: <MessageCircle />,
    type: "link",
    path: "/messages",
  },
];
