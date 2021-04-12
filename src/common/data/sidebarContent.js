export const sidebarContent = [
  { name: "Dashboard", image: "icon-Dashboard", path: "/" },
  { name: "Cards Types", image: "icon-card", path: "/cardtypes" },
  { name: "Cards", image: "icon-card", path: "/cards" },
  { name: "Contacts", image: "icon-People", path: "/contacts" },
  { name: "Currencies", image: "bx bx-money", path: "/currencies" },
  {
    name: "Operations",
    image: "icon-Trade",
    path: "/#",
    submenu: [
      { name: "Types", path: "/#" },
      { name: "For Users", path: "/#" },
      { name: "For Cards", path: "/#" },
    ],
  },
  { name: "Requisites", image: "icon-List", path: "/requisites" },
  { name: "Tariffs", image: "icon-Clipboard", path: "/tariffs" },
  { name: "Users", image: "icon-Man", path: "/users" },
]
