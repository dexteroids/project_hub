import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tag } from './Tag';
import { Button } from './ui/button';
import { Calendar, Users, MapPin, ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  onBack?: () => void;
}

export function ProjectDetail({ onBack }: ProjectDetailProps) {
  const project = {
    title: 'Sistem Manajemen Perpustakaan Digital',
    owner: {
      name: 'Dr. Budi Santoso',
      avatar: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=100',
      title: 'Dosen Teknik Informatika',
      bio: 'Dosen dan peneliti di bidang Software Engineering dengan fokus pada sistem informasi dan database. Telah membimbing 20+ proyek mahasiswa.',
    },
    description: `Platform digital komprehensif untuk mengelola koleksi buku, sistem peminjaman, dan katalog perpustakaan kampus dengan teknologi AI untuk rekomendasi buku.

Proyek ini bertujuan untuk modernisasi sistem perpustakaan kampus yang saat ini masih manual. Kami akan membangun aplikasi web yang user-friendly dengan fitur:
- Katalog digital dengan pencarian cepat
- Sistem peminjaman dan pengembalian otomatis
- Rekomendasi buku berbasis AI
- Dashboard analytics untuk librarian
- Notifikasi otomatis untuk jatuh tempo

Target selesai dalam 4 bulan dengan metodologi Agile/Scrum. Kami mencari tim yang passionate dan committed untuk belajar bersama.`,
    startDate: '15 November 2025',
    duration: '4 bulan',
    location: 'Hybrid (Online & Kampus)',
    members: 3,
    maxMembers: 6,
    skills: ['React', 'Node.js', 'PostgreSQL', 'Machine Learning', 'Docker', 'Git'],
    roles: [
      {
        title: 'UI/UX Designer',
        description: 'Merancang wireframe, prototype, dan design system untuk aplikasi',
        skills: ['Figma', 'User Research', 'Prototyping'],
        slots: '1/1',
        filled: true,
      },
      {
        title: 'Front-End Developer',
        description: 'Mengembangkan interface aplikasi dengan React dan TypeScript',
        skills: ['React', 'TypeScript', 'Tailwind CSS'],
        slots: '1/2',
        filled: false,
      },
      {
        title: 'Back-End Developer',
        description: 'Membangun REST API, database design, dan server logic',
        skills: ['Node.js', 'Express', 'PostgreSQL'],
        slots: '0/2',
        filled: false,
      },
      {
        title: 'ML Engineer',
        description: 'Mengembangkan sistem rekomendasi buku menggunakan machine learning',
        skills: ['Python', 'TensorFlow', 'NLP'],
        slots: '0/1',
        filled: false,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back Button */}
      <div className="bg-white border-b border-[#E5E7EB] px-8 py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#0052A3] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Dashboard
        </button>
      </div>

      <div className="p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Column (70%) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <div className="bg-white rounded-lg p-8 border border-[#E5E7EB]">
              <h1 className="text-[#1A1A1A] mb-4">{project.title}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <ImageWithFallback
                  src={project.owner.avatar}
                  alt={project.owner.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#1A1A1A]">{project.owner.name}</p>
                  <p className="text-[#6B7280]">{project.owner.title}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-[#6B7280] mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Mulai: {project.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{project.members}/{project.maxMembers} Anggota</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-8 border border-[#E5E7EB]">
              <h2 className="text-[#1A1A1A] mb-4">Deskripsi Proyek</h2>
              <div className="text-[#6B7280] whitespace-pre-line leading-relaxed">
                {project.description}
              </div>
            </div>

            {/* Roles Needed */}
            <div className="bg-white rounded-lg p-8 border border-[#E5E7EB]">
              <h2 className="text-[#1A1A1A] mb-6">Peran yang Dibutuhkan</h2>
              <div className="space-y-4">
                {project.roles.map((role, index) => (
                  <div
                    key={index}
                    className="border border-[#E5E7EB] rounded-lg p-6 hover:border-[#0052A3] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-[#1A1A1A]">{role.title}</h3>
                          {role.filled ? (
                            <span className="px-2 py-1 bg-green-100 text-[#16A34A] rounded text-sm">
                              Terisi
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-blue-100 text-[#0052A3] rounded text-sm">
                              Tersedia
                            </span>
                          )}
                        </div>
                        <p className="text-[#6B7280] mb-3">{role.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, idx) => (
                            <Tag key={idx} variant="primary">{skill}</Tag>
                          ))}
                        </div>
                      </div>
                      <div className="ml-4">
                        <Button
                          className="bg-[#0052A3] hover:bg-[#003D82]"
                          disabled={role.filled}
                        >
                          {role.filled ? 'Penuh' : 'Lamar'}
                        </Button>
                      </div>
                    </div>
                    <p className="text-[#6B7280] mt-2">Slot: {role.slots}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Column (30%) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Skills Required */}
            <div className="bg-white rounded-lg p-6 border border-[#E5E7EB] sticky top-24">
              <h3 className="text-[#1A1A1A] mb-4">Keahlian yang Dibutuhkan</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, index) => (
                  <Tag key={index} variant="primary">{skill}</Tag>
                ))}
              </div>

              <div className="border-t border-[#E5E7EB] pt-6 mt-6">
                <h3 className="text-[#1A1A1A] mb-4">Tentang Project Owner</h3>
                <div className="flex items-center gap-3 mb-3">
                  <ImageWithFallback
                    src={project.owner.avatar}
                    alt={project.owner.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[#1A1A1A]">{project.owner.name}</p>
                    <p className="text-[#6B7280]">{project.owner.title}</p>
                  </div>
                </div>
                <p className="text-[#6B7280]">{project.owner.bio}</p>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-[#0052A3] text-[#0052A3] hover:bg-blue-50"
                >
                  Lihat Profil
                </Button>
              </div>

              <div className="border-t border-[#E5E7EB] pt-6 mt-6">
                <Button className="w-full bg-[#FF9966] hover:bg-[#FF8A50] mb-3">
                  Bergabung dengan Proyek
                </Button>
                <Button variant="outline" className="w-full border-[#E5E7EB]">
                  Simpan untuk Nanti
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}