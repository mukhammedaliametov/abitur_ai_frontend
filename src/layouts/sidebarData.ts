import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  ClipboardCheck, 
  Bot, 
  BookMarked, 
  BarChart3, 
  Trophy, 
  History 
} from 'lucide-react';

export interface SidebarItem {
  title: string;
  path: string;
  icon: any;
  badge?: number;
}

export interface SidebarSection {
  sectionTitle: string;
  items: SidebarItem[];
}

export const sidebarMenuGroups: SidebarSection[] = [
  {
    sectionTitle: "ASOSIY",
    items: [
      { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { title: "Fanlar", path: "/fanlar", icon: BookOpen },
      { title: "Mavzular", path: "/mavzular", icon: FileText },
    ]
  },
  {
    sectionTitle: "O'QISH",
    items: [
      { title: "Mock testlar", path: "/mock-testlar", icon: ClipboardCheck },
      { title: "AI Tutor", path: "/ai-tutor", icon: Bot },
      { title: "Darsliklar", path: "/darsliklar", icon: BookMarked },
    ]
  },
  {
    sectionTitle: "TAHLIL",
    items: [
      { title: "Progress", path: "/progress", icon: BarChart3 },
      { title: "Leaderboard", path: "/leaderboard", icon: Trophy },
      { title: "Tarix", path: "/tarix", icon: History, badge: 3 },
    ]
  }
];