import { Search, Home, Briefcase, PlusCircle, User, Bell } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tag } from './Tag';

interface Project {
  id: string;
  title: string;
  owner: string;
  ownerAvatar: string;
  tags: string[];
  applicants: number;
  deadline: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Desain UI/UX Aplikasi Mobile Banking',
    owner: 'Dr. Sarah Johnson',
    ownerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    tags: ['UI/UX', 'Figma'],
    applicants: 12,
    deadline: '5 hari lagi',
  },
  {
    id: '2',
    title: 'Website E-Commerce dengan React',
    owner: 'Prof. Ahmad Rizki',
    ownerAvatar: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=100',
    tags: ['React', 'TypeScript'],
    applicants: 8,
    deadline: '3 hari lagi',
  },
  {
    id: '3',
    title: 'Aplikasi IoT Smart Home',
    owner: 'Ir. Budi Santoso',
    ownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    tags: ['IoT', 'Arduino'],
    applicants: 15,
    deadline: '7 hari lagi',
  },
];

interface MobileDashboardProps {
  onProjectClick?: (id: string) => void;
  onNavigate?: (view: string) => void;
}

export function MobileDashboard({ onProjectClick, onNavigate }: MobileDashboardProps) {
  const [activeNav, setActiveNav] = useState('home');

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
    if (onNavigate) {
      onNavigate(nav);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Mobile Header */}
      <header className="bg-white border-b border-[#E5E7EB] px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0052A3] rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">PH</span>
            </div>
            <span className="text-[#1A1A1A]">ProjectHub</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 text-[#6B7280]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF9966] rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] w-4 h-4" />
          <Input
            type="text"
            placeholder="Cari proyek..."
            className="pl-9 bg-gray-50 border-[#E5E7EB] text-sm h-10"
          />
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-4">
        {/* Welcome Section */}
        <div className="mb-6">
          <h2 className="text-[#1A1A1A] mb-1">Selamat Datang, Ahmad</h2>
          <p className="text-[#6B7280] text-sm">Temukan proyek yang sesuai dengan keahlianmu</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 text-center">
            <div className="text-[#0052A3] text-xl mb-1">5</div>
            <div className="text-[#6B7280] text-xs">Proyek Aktif</div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 text-center">
            <div className="text-[#FF9966] text-xl mb-1">12</div>
            <div className="text-[#6B7280] text-xs">Lamaran</div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 text-center">
            <div className="text-green-600 text-xl mb-1">8</div>
            <div className="text-[#6B7280] text-xs">Diterima</div>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#1A1A1A]">Proyek Rekomendasi</h3>
          <button className="text-[#0052A3] text-sm">Lihat Semua</button>
        </div>

        {/* Project Cards - Mobile Optimized */}
        <div className="space-y-3">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick?.(project.id)}
              className="bg-white border border-[#E5E7EB] rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              {/* Project Header */}
              <h4 className="text-[#1A1A1A] mb-3 line-clamp-2">
                {project.title}
              </h4>

              {/* Owner Info */}
              <div className="flex items-center gap-2 mb-3">
                <ImageWithFallback
                  src={project.ownerAvatar}
                  alt={project.owner}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-[#6B7280] text-sm">{project.owner}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.slice(0, 2).map((tag) => (
                  <Tag key={tag} variant="skill">{tag}</Tag>
                ))}
                {project.tags.length > 2 && (
                  <span className="text-[#6B7280] text-sm">+{project.tags.length - 2}</span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-sm text-[#6B7280] pt-3 border-t border-[#E5E7EB]">
                <span>{project.applicants} pelamar</span>
                <span>{project.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] px-4 py-2 z-50">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button
            onClick={() => handleNavClick('home')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
              activeNav === 'home'
                ? 'text-[#0052A3] bg-blue-50'
                : 'text-[#6B7280] hover:text-[#1A1A1A]'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </button>

          <button
            onClick={() => handleNavClick('search')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
              activeNav === 'search'
                ? 'text-[#0052A3] bg-blue-50'
                : 'text-[#6B7280] hover:text-[#1A1A1A]'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-xs">Cari</span>
          </button>

          <button
            onClick={() => handleNavClick('create')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
              activeNav === 'create'
                ? 'text-[#0052A3] bg-blue-50'
                : 'text-[#6B7280] hover:text-[#1A1A1A]'
            }`}
          >
            <PlusCircle className="w-5 h-5" />
            <span className="text-xs">Buat</span>
          </button>

          <button
            onClick={() => handleNavClick('profile')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
              activeNav === 'profile'
                ? 'text-[#0052A3] bg-blue-50'
                : 'text-[#6B7280] hover:text-[#1A1A1A]'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </nav>
    </div>
  );
}