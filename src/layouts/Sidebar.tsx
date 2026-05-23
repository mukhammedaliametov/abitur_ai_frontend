import React from 'react';
import { sidebarMenuGroups } from './sidebarData';

// Agar loyihada React Router ishlatsangiz, quyidagi commentni oching va <a> larni <Link> ga o'zgartiring:
// import { Link, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  // Real loyihada active menyuni aniqlash uchun: const location = useLocation();
  // Hozircha test uchun dashboardni active qilib turamiz:
  const currentPath = "/dashboard"; 

  return (
    <aside className="w-64 h-screen bg-[#0d121f] text-gray-400 flex flex-col justify-between border-r border-gray-800 font-sans select-none">
      
      {/* Yuqori qism: Logo */}
      <div className="p-5 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#00bda5] rounded-xl flex items-center justify-center text-white font-bold text-xl">
          {/* Bu yerga rasm yoki logotip ikonkasi qo'yiladi */}
          ☘️
        </div>
        <span className="text-white font-bold text-xl tracking-wide">AbiturAI</span>
      </div>

      {/* Markaziy qism: Menyu Navigatsiyasi */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6 custom-scrollbar">
        {sidebarMenuGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-1">
            {/* Sarlavha (ASOSIY, O'QISH, TAHLIL) */}
            <h3 className="px-3 text-xs font-semibold text-gray-600 tracking-wider mb-2">
              {group.sectionTitle}
            </h3>
            
            {/* Guruh ichidagi elementlar */}
            <div className="space-y-1">
              {group.items.map((item, itemIdx) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;

                return (
                  <a
                    key={itemIdx}
                    href={item.path}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group text-[15px] font-medium
                      ${isActive 
                        ? 'bg-[#122528] text-[#00bda5] border-l-4 border-[#00bda5] rounded-l-none' 
                        : 'hover:bg-[#141b2d] hover:text-gray-200'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-[#00bda5]' : 'text-gray-500 group-hover:text-gray-300'}`} />
                      <span>{item.title}</span>
                    </div>
                    
                    {/* Bildirishnoma (Badge) masalan Tarix oldidagi '3' */}
                    {item.badge && (
                      <span className="bg-[#e04f5f]/20 text-[#e04f5f] text-xs font-bold px-2 py-0.5 rounded-full">
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

      {/* Pastki qism: Profil va Tarif */}
      <div className="p-4 border-t border-gray-800 bg-[#0a0e1a] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-inner">
          K
        </div>
        <div className="flex flex-col">
          <span className="text-white font-semibold text-sm leading-tight">Kumush</span>
          <span className="text-gray-500 text-xs mt-0.5">Standart plan</span>
        </div>
      </div>

    </aside>
  );
};