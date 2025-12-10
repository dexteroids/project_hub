import { Search, Plus } from 'lucide-react';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { NotificationDropdown } from './NotificationDropdown';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';

interface HeaderProps {
  userAvatar?: string;
  onCreateProject?: () => void;
  onSettingsClick?: () => void;
  onProfileClick?: () => void;
}

export function Header({ userAvatar, onCreateProject, onSettingsClick, onProfileClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-[#E5E7EB] px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0052A3] rounded-lg flex items-center justify-center">
              <span className="text-white">PH</span>
            </div>
            <span className="text-[#1A1A1A]">ProjectHub</span>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] w-5 h-5" />
            <Input
              type="text"
              placeholder="Cari proyek, keahlian, atau orang..."
              className="pl-10 bg-gray-50 border-[#E5E7EB]"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            className="bg-[#0052A3] hover:bg-[#003D82]"
            onClick={onCreateProject}
          >
            <Plus className="w-4 h-4 mr-2" />
            Buat Proyek
          </Button>
          <NotificationDropdown />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="focus:outline-none">
                <ImageWithFallback
                  src={userAvatar || "https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=100"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover cursor-pointer hover:ring-2 ring-[#0052A3]"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={onProfileClick}>
                Profil Saya
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onSettingsClick}>
                Pengaturan
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}