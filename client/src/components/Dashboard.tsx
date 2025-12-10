import { ProjectCard } from './ProjectCard';

interface DashboardProps {
  onProjectClick?: (projectId: string) => void;
}

export function Dashboard({ onProjectClick }: DashboardProps) {
  const recommendedProjects = [
    {
      id: '1',
      title: 'Sistem Manajemen Perpustakaan Digital',
      owner: 'Dr. Budi Santoso',
      ownerAvatar: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=100',
      description: 'Platform digital untuk mengelola koleksi buku, peminjaman, dan katalog perpustakaan kampus dengan fitur pencarian AI.',
      skills: ['React', 'Node.js', 'PostgreSQL', 'Machine Learning'],
      members: 3,
      timePosted: '2 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1658124974726-d96bc44783cf?w=400',
    },
    {
      id: '2',
      title: 'Aplikasi Mobile Kesehatan Mental Mahasiswa',
      owner: 'Prof. Sarah Wijaya',
      ownerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      description: 'Aplikasi mobile untuk membantu mahasiswa mengelola stress dan kesehatan mental dengan fitur journaling dan meditasi.',
      skills: ['Flutter', 'Firebase', 'UI/UX Design'],
      members: 2,
      timePosted: '3 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400',
    },
    {
      id: '3',
      title: 'Platform E-Learning Interaktif',
      owner: 'Rina Kusuma, S.Kom',
      ownerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      description: 'Website pembelajaran online dengan fitur video interaktif, quiz real-time, dan gamifikasi untuk meningkatkan engagement mahasiswa.',
      skills: ['Vue.js', 'Laravel', 'WebRTC', 'MySQL'],
      members: 5,
      timePosted: '1 minggu lalu',
      thumbnail: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400',
    },
  ];

  const recentProjects = [
    {
      id: '4',
      title: 'Sistem Informasi Alumni Kampus',
      owner: 'Agus Prasetyo, M.T',
      ownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      description: 'Portal untuk menghubungkan alumni dengan kampus dan sesama alumni, termasuk fitur job board dan networking.',
      skills: ['React Native', 'GraphQL', 'MongoDB'],
      members: 4,
      timePosted: '5 jam lalu',
    },
    {
      id: '5',
      title: 'Dashboard Analytics Kampus',
      owner: 'Lina Hermawan',
      ownerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      description: 'Dashboard interaktif untuk visualisasi data akademik, kehadiran, dan performa mahasiswa menggunakan data science.',
      skills: ['Python', 'D3.js', 'Tableau', 'Data Analysis'],
      members: 2,
      timePosted: '1 hari lalu',
    },
    {
      id: '6',
      title: 'Chatbot Customer Service Kampus',
      owner: 'Andi Pratama',
      ownerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      description: 'AI chatbot untuk menjawab pertanyaan umum mahasiswa tentang administrasi, jadwal, dan informasi kampus.',
      skills: ['NLP', 'Python', 'TensorFlow', 'Dialogflow'],
      members: 3,
      timePosted: '3 hari lalu',
    },
    {
      id: '7',
      title: 'Marketplace Jasa Freelance Mahasiswa',
      owner: 'Dewi Anggraini',
      ownerAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100',
      description: 'Platform untuk mahasiswa menawarkan dan mencari jasa freelance seperti design, coding, dan content writing.',
      skills: ['Next.js', 'Stripe', 'Tailwind CSS'],
      members: 4,
      timePosted: '4 hari lalu',
    },
    {
      id: '8',
      title: 'Game Edukasi Sejarah Indonesia',
      owner: 'Rudi Hermansyah',
      ownerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      description: 'Game berbasis Unity untuk mengajarkan sejarah Indonesia dengan cara yang menarik dan interaktif.',
      skills: ['Unity', 'C#', 'Game Design', '3D Modeling'],
      members: 6,
      timePosted: '1 minggu lalu',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-[#1A1A1A] mb-2">Selamat Datang, Ahmad! 👋</h1>
          <p className="text-[#6B7280]">Temukan proyek menarik dan kembangkan skillmu bersama tim</p>
        </div>

        {/* Recommended Projects */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#1A1A1A]">Proyek yang Direkomendasikan Untukmu</h2>
            <a href="#" className="text-[#0052A3] hover:underline">Lihat Semua →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => onProjectClick?.(project.id)}
              />
            ))}
          </div>
        </section>

        {/* Recent Projects */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#1A1A1A]">Proyek Terbaru</h2>
            <a href="#" className="text-[#0052A3] hover:underline">Lihat Semua →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => onProjectClick?.(project.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}