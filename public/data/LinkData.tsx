export type SideBar = {
  id: number;
  path: string;
  name: string;
  icon: React.ReactElement;
}

export const LinkData: SideBar[] = [
  {
    id: 1,
    path: "/",
    name: "Overview",
    icon: <i className="ph ph-house h-6 w-6"></i>,
  },
  {
    id: 2,
    path: "/transactions",
    name: "Transactions",
    icon: <i className="ph ph-arrows-down-up h-6 w-6"></i>,
  },
  {
    id: 3,
    path: "/budgets",
    name: "Budgets",
    icon: <i className="ph ph-chart-donut h-6 w-6"></i>,
  },
  {
    id: 4,
    path: "/pots",
    name: "Pots",
    icon: <i className="ph ph-tip-jar h-6 w-6"></i>,
  },
  {
    id: 5,
    path: "/recurringBills",
    name: "Recurring Bills",
    icon: <i className="ph ph-receipt h-6 w-6"></i>,
  },
];
