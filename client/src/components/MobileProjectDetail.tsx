import { ArrowLeft, Calendar, Users, MapPin, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tag } from './Tag';

interface MobileProjectDetailProps {
  onBack?: () => void;
}

export function MobileProjectDetail({ onBack }: MobileProjectDetailProps) {
  const project = {
    title: 'Desain UI/UX Aplikasi Mobile Banking',
    owner: 'Dr. Sarah Johnson',
    ownerTitle: 'Dosen Desain Komunikasi Visual',
    ownerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    description:
      'Kami sedang mencari mahasiswa yang tertarik dalam desain UI/UX untuk mengembangkan aplikasi mobile banking yang modern dan user-friendly. Proyek ini merupakan bagian dari penelitian tentang financial technology.',
    deadline: '15 Maret 2024',
    location: 'Hybrid (Online & Kampus)',
    applicants: 12,
    skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
    roles: [
      { title: 'UI Designer', slots: 2, applicants: 5 },
      { title: 'UX Researcher', slots: 1, applicants: 7 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="bg-white border-b border-[#E5E7EB] px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg -ml-2"
          >
            <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" />
          </button>
          <span className="text-[#1A1A1A]">Detail Proyek</span>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Share2 className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>
      </header>

      {/* Content - Scrollable */}
      <div className="px-4 py-4 pb-24">
        {/* Project Title */}
        <h2 className="text-[#1A1A1A] mb-4">{project.title}</h2>

        {/* Owner Info */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 mb-4">
          <div className="flex items-start gap-3">
            <ImageWithFallback
              src={project.ownerAvatar}
              alt={project.owner}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-[#1A1A1A] mb-1">{project.owner}</h4>
              <p className="text-[#6B7280] text-sm">{project.ownerTitle}</p>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 mb-4 space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="w-4 h-4 text-[#6B7280] flex-shrink-0" />
            <div>
              <div className="text-[#6B7280]">Deadline</div>
              <div className="text-[#1A1A1A]">{project.deadline}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-[#6B7280] flex-shrink-0" />
            <div>
              <div className="text-[#6B7280]">Lokasi</div>
              <div className="text-[#1A1A1A]">{project.location}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Users className="w-4 h-4 text-[#6B7280] flex-shrink-0" />
            <div>
              <div className="text-[#6B7280]">Pelamar</div>
              <div className="text-[#1A1A1A]">{project.applicants} orang</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 mb-4">
          <h3 className="text-[#1A1A1A] mb-3">Deskripsi Proyek</h3>
          <p className="text-[#6B7280] leading-relaxed">{project.description}</p>
        </div>

        {/* Roles Needed */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 mb-4">
          <h3 className="text-[#1A1A1A] mb-3">Posisi yang Dibutuhkan</h3>
          <div className="space-y-3">
            {project.roles.map((role, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <h4 className="text-[#1A1A1A] mb-1">{role.title}</h4>
                  <p className="text-[#6B7280] text-sm">{role.applicants} pelamar</p>
                </div>
                <div className="text-right">
                  <div className="text-[#0052A3]">{role.slots}</div>
                  <div className="text-[#6B7280] text-xs">slot</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Required */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 mb-4">
          <h3 className="text-[#1A1A1A] mb-3">Keahlian yang Dibutuhkan</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <Tag key={skill} variant="skill">{skill}</Tag>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 z-50">
        <Button className="w-full bg-[#0052A3] hover:bg-[#003D82] h-12">
          Lamar Sekarang
        </Button>
      </div>
    </div>
  );
}