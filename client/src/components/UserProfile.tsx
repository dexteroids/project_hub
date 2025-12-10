import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tag } from './Tag';
import { ProjectCard } from './ProjectCard';
import { Button } from './ui/button';
import { Mail, Linkedin, Github, MapPin, Calendar, ArrowLeft } from 'lucide-react';

interface UserProfileProps {
  onBack?: () => void;
}

export function UserProfile({ onBack }: UserProfileProps) {
  const user = {
    name: 'Ahmad Fauzi',
    avatar: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=400',
    major: 'Teknik Informatika',
    semester: 'Semester 6',
    university: 'Universitas Indonesia',
    location: 'Jakarta, Indonesia',
    joinDate: 'Bergabung sejak Januari 2024',
    bio: 'Mahasiswa Teknik Informatika yang passionate dalam pengembangan web dan mobile. Aktif dalam berbagai proyek kampus dan senang berkolaborasi dengan tim. Fokus pada front-end development dengan React dan UI/UX design.',
    email: 'ahmad.fauzi@ui.ac.id',
    linkedin: 'linkedin.com/in/ahmadfauzi',
    github: 'github.com/ahmadfauzi',
    skills: [
      'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Figma',
      'UI/UX Design', 'JavaScript', 'Node.js', 'Git', 'Responsive Design',
      'REST API', 'MongoDB'
    ],
    stats: {
      projects: 8,
      collaborations: 15,
      reviews: 12,
    },
  };

  const projects = [
    {
      id: '1',
      title: 'E-Commerce Platform untuk UMKM',
      owner: 'Ahmad Fauzi',
      ownerAvatar: user.avatar,
      description: 'Platform e-commerce untuk membantu UMKM menjual produk mereka secara online dengan fitur payment gateway terintegrasi.',
      skills: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      members: 4,
      timePosted: 'Sedang Berjalan',
      thumbnail: 'https://images.unsplash.com/photo-1658124974726-d96bc44783cf?w=400',
    },
    {
      id: '2',
      title: 'Aplikasi Manajemen Tugas Mahasiswa',
      owner: 'Ahmad Fauzi',
      ownerAvatar: user.avatar,
      description: 'Aplikasi mobile untuk membantu mahasiswa mengelola tugas, deadline, dan jadwal kuliah dengan sistem reminder otomatis.',
      skills: ['React Native', 'Firebase', 'UI/UX'],
      members: 3,
      timePosted: 'Selesai - Okt 2024',
    },
    {
      id: '3',
      title: 'Portfolio Website Builder',
      owner: 'Ahmad Fauzi',
      ownerAvatar: user.avatar,
      description: 'Website builder drag-and-drop untuk mahasiswa membuat portfolio profesional tanpa coding.',
      skills: ['Next.js', 'Tailwind CSS', 'Supabase'],
      members: 2,
      timePosted: 'Selesai - Sep 2024',
    },
  ];

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
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg p-8 border border-[#E5E7EB] mb-8">
            <div className="flex items-start gap-6 mb-6">
              <ImageWithFallback
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h1 className="text-[#1A1A1A] mb-1">{user.name}</h1>
                    <p className="text-[#6B7280] mb-2">{user.major} • {user.semester}</p>
                    <div className="flex items-center gap-4 text-[#6B7280]">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{user.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{user.joinDate}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-[#0052A3] hover:bg-[#003D82]">
                    Edit Profil
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex gap-8 py-4 border-t border-b border-[#E5E7EB] my-4">
                  <div>
                    <p className="text-[#1A1A1A]">{user.stats.projects}</p>
                    <p className="text-[#6B7280]">Proyek</p>
                  </div>
                  <div>
                    <p className="text-[#1A1A1A]">{user.stats.collaborations}</p>
                    <p className="text-[#6B7280]">Kolaborasi</p>
                  </div>
                  <div>
                    <p className="text-[#1A1A1A]">{user.stats.reviews}</p>
                    <p className="text-[#6B7280]">Ulasan</p>
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${user.email}`}
                    className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-lg hover:bg-gray-50"
                  >
                    <Mail className="w-4 h-4 text-[#6B7280]" />
                    <span className="text-[#6B7280]">Email</span>
                  </a>
                  <a
                    href={`https://${user.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-lg hover:bg-gray-50"
                  >
                    <Linkedin className="w-4 h-4 text-[#6B7280]" />
                    <span className="text-[#6B7280]">LinkedIn</span>
                  </a>
                  <a
                    href={`https://${user.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-lg hover:bg-gray-50"
                  >
                    <Github className="w-4 h-4 text-[#6B7280]" />
                    <span className="text-[#6B7280]">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg p-8 border border-[#E5E7EB] mb-8">
            <h2 className="text-[#1A1A1A] mb-4">Tentang Saya</h2>
            <p className="text-[#6B7280] leading-relaxed">{user.bio}</p>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-lg p-8 border border-[#E5E7EB] mb-8">
            <h2 className="text-[#1A1A1A] mb-6">Keahlian Saya</h2>
            <div className="flex flex-wrap gap-3">
              {user.skills.map((skill, index) => (
                <Tag key={index} variant="primary">{skill}</Tag>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-white rounded-lg p-8 border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[#1A1A1A]">Proyek Saya</h2>
              <Button variant="outline" className="border-[#0052A3] text-[#0052A3] hover:bg-blue-50">
                Buat Proyek Baru
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}