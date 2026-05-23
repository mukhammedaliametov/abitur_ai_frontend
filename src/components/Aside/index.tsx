import React from 'react';
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

// ==========================================
// 1. INTERFACELAR VA MA'LUMOTLAR (DATA)
// ==========================================
interface SidebarItem {
  title: string;
  path: string;
  icon: any;
  badge?: number;
}

interface SidebarSection {
  sectionTitle: string;
  items: SidebarItem[];
}

const sidebarMenuGroups: SidebarSection[] = [
  {
    sectionTitle: "ASOSIY",
    items: [
      { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { title: "Fanlar", path: "/subjects", icon: BookOpen },
      { title: "Mavzular", path: "/topics", icon: FileText },
    ]
  },
  {
    sectionTitle: "O'QISH",
    items: [
      { title: "Mock testlar", path: "/mock testlar", icon: ClipboardCheck },
      { title: "AI Tutor", path: "/AI tutor", icon: Bot },
      { title: "Darsliklar", path: "/darsliklar", icon: BookMarked },
    ]
  },
  {
    sectionTitle: "TAHLIL",
    items: [
      { title: "Progress", path: "/progress", icon: BarChart3 },
      { title: "Leaderboard", path: "/leaderboard", icon: Trophy },
      { title: "Tarix", path: "/history", icon: History, badge: 3 },
    ]
  }
];

// ==========================================
// 2. ASOSIY SIDEBAR KOMPONENTI (UI)
// ==========================================
export const Aside: React.FC = () => {
  const currentPath = "/dashboard"; // Test uchun dashboardni faol ushlaymiz

  return (
    <aside className="w-64 h-screen bg-[#0d121f] text-gray-400 flex flex-col justify-between border-r border-gray-800 font-sans select-none text-left box-border">
      
      {/* Yuqori va Markaziy qism */}
      <div className="flex flex-col justify-start items-start text-left w-full">
        
        {/* Logo */}
        <div className="p-5 flex items-center justify-start gap-3 w-full text-left">
          <div className="w-10 h-10 bg-[#00bda5] rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            ☘️
          </div>
          <span className="text-white font-bold text-xl tracking-wide text-left">AbiturAI</span>
        </div>

        {/* Menyu Navigatsiyasi */}
        <div className="w-full overflow-y-auto px-3 py-2 space-y-6 text-left flex flex-col justify-start items-start">
          {sidebarMenuGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1 text-left w-full flex flex-col justify-start items-start">
              
              {/* Sarlavhalar (ASOSIY, O'QISH, TAHLIL) */}
              <h3 className="px-3 text-xs font-semibold text-gray-500 tracking-wider mb-2 text-left block w-full">
                {group.sectionTitle}
              </h3>
              
              {/* Linklar */}
              <div className="space-y-1 text-left w-full flex flex-col justify-start items-start">
                {group.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  const isActive = currentPath === item.path;

                  return (
                    <a
                      key={itemIdx}
                      href={item.path}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group text-[15px] font-medium w-full text-left
                        ${isActive 
                          ? 'bg-[#122528] text-[#00bda5] border-l-4 border-[#00bda5] rounded-l-none' 
                          : 'hover:bg-[#141b2d] hover:text-gray-200'
                        }`}
                    >
                      <div className="flex items-center justify-start gap-3 text-left">
                        <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-[#00bda5]' : 'text-gray-500 group-hover:text-gray-300'}`} />
                        <span className="text-left">{item.title}</span>
                      </div>
                      
                      {/* Badge (Bildirishnoma soni) */}
                      {item.badge && (
                        <span className="bg-[#e04f5f]/20 text-[#e04f5f] text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Pastki qism: Profil */}
      <div className="p-4 border-t border-gray-800 bg-[#0a0e1a] flex items-center justify-start gap-3 w-full text-left">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-inner flex-shrink-0">
          K
        </div>
        <div className="flex flex-col text-left justify-center items-start">
          <span className="text-white font-semibold text-sm leading-tight text-left">Kumush</span>
          <span className="text-gray-500 text-xs mt-0.5 text-left">Standart plan</span>
        </div>
      </div>

    </aside>
  );
};