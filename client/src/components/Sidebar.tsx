import { Home, Search, Briefcase, User } from 'lucide-react';

interface SidebarProps {
  activeMenu: string;
  onMenuClick: (menu: string) => void;
}

export function Sidebar({ activeMenu, onMenuClick }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'search', label: 'Cari Proyek', icon: Search },
    { id: 'projects', label: 'Proyek Saya', icon: Briefcase },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  return (
    <aside className="w-64 bg-white border-r border-[#E5E7EB] min-h-[calc(100vh-73px)] sticky top-[73px]">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#0052A3] text-white'
                  : 'text-[#6B7280] hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}