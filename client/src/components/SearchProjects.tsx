import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';

interface SearchProjectsProps {
  onProjectClick?: () => void;
}

export function SearchProjects({ onProjectClick }: SearchProjectsProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const skills = [
    'React', 'TypeScript', 'UI/UX Design', 'Node.js', 
    'Python', 'Machine Learning', 'Figma', 'Java',
    'Mobile Development', 'Data Analysis'
  ];

  const categories = [
    'Riset Dosen',
    'Lomba',
    'Tugas Kuliah',
    'Fun Project',
    'Startup Project'
  ];

  const departments = [
    'Informatika',
    'Sistem Informasi',
    'Teknik Elektro',
    'Desain Komunikasi Visual',
    'Manajemen'
  ];

  const mockProjects = [
    {
      title: 'Platform E-Learning Berbasis AI',
      owner: 'Dr. Sarah Johnson',
      ownerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      description: 'Membangun platform pembelajaran adaptif menggunakan Machine Learning untuk personalisasi konten.',
      skills: ['Machine Learning', 'Python', 'React', 'Node.js'],
      members: 3,
      timePosted: '2 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400',
    },
    {
      title: 'Aplikasi Mobile Manajemen Kampus',
      owner: 'Ahmad Pratama',
      ownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      description: 'Sistem terintegrasi untuk manajemen jadwal, presensi, dan tugas kuliah mahasiswa.',
      skills: ['Mobile Development', 'UI/UX Design', 'Firebase'],
      members: 5,
      timePosted: '5 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
    },
    {
      title: 'Sistem Monitoring IoT untuk Smart Campus',
      owner: 'Prof. David Chen',
      ownerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      description: 'Implementasi sensor IoT untuk monitoring energi dan keamanan gedung kampus.',
      skills: ['IoT', 'Python', 'Data Analysis', 'Hardware'],
      members: 4,
      timePosted: '1 minggu lalu',
      thumbnail: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400',
    },
    {
      title: 'Website Portfolio Mahasiswa Kreatif',
      owner: 'Lisa Anderson',
      ownerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      description: 'Platform showcase karya mahasiswa DKV dengan fitur interaktif dan animasi menarik.',
      skills: ['UI/UX Design', 'React', 'TypeScript', 'Figma'],
      members: 2,
      timePosted: '3 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400',
    },
    {
      title: 'Chatbot AI untuk Layanan Mahasiswa',
      owner: 'Michael Wong',
      ownerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      description: 'Asisten virtual berbasis NLP untuk menjawab pertanyaan seputar akademik dan kampus.',
      skills: ['Machine Learning', 'Python', 'NLP', 'Node.js'],
      members: 3,
      timePosted: '4 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400',
    },
    {
      title: 'Game Edukasi Matematika Interaktif',
      owner: 'Jessica Martinez',
      ownerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      description: 'Game berbasis Unity untuk membantu siswa belajar matematika dengan cara yang menyenangkan.',
      skills: ['Unity', 'C#', 'UI/UX Design', 'Game Development'],
      members: 4,
      timePosted: '6 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400',
    },
    {
      title: 'Dashboard Analytics untuk Business Intelligence',
      owner: 'Daniel Park',
      ownerAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100',
      description: 'Tool visualisasi data real-time untuk analisis bisnis dan decision making.',
      skills: ['Data Analysis', 'React', 'TypeScript', 'Python'],
      members: 3,
      timePosted: '1 minggu lalu',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    },
    {
      title: 'Aplikasi Manajemen Event Kampus',
      owner: 'Siti Nurhaliza',
      ownerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
      description: 'Platform untuk organisasi mahasiswa mengelola dan mempromosikan event kampus.',
      skills: ['React', 'Node.js', 'UI/UX Design', 'MongoDB'],
      members: 5,
      timePosted: '2 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
    },
    {
      title: 'Sistem Booking Ruangan Kampus',
      owner: 'Ryan Abdullah',
      ownerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
      description: 'Aplikasi untuk reservasi ruangan kuliah, lab, dan fasilitas kampus secara online.',
      skills: ['Mobile Development', 'Java', 'Firebase', 'UI/UX Design'],
      members: 4,
      timePosted: '5 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
    },
    {
      title: 'Platform Kolaborasi Riset Mahasiswa',
      owner: 'Dr. Emily Roberts',
      ownerAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100',
      description: 'Ruang digital untuk mahasiswa berbagi hasil riset dan berkolaborasi dalam proyek penelitian.',
      skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      members: 6,
      timePosted: '3 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=400',
    },
    {
      title: 'AR App untuk Virtual Campus Tour',
      owner: 'Kevin Tan',
      ownerAvatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100',
      description: 'Aplikasi Augmented Reality untuk tour virtual kampus bagi calon mahasiswa baru.',
      skills: ['Unity', 'AR Development', 'C#', '3D Modeling'],
      members: 3,
      timePosted: '1 minggu lalu',
      thumbnail: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400',
    },
    {
      title: 'Blockchain-based Certificate System',
      owner: 'Prof. Mark Stevens',
      ownerAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
      description: 'Sistem sertifikat digital terverifikasi menggunakan teknologi blockchain untuk kredensial akademik.',
      skills: ['Blockchain', 'Solidity', 'Node.js', 'React'],
      members: 4,
      timePosted: '4 hari lalu',
      thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400',
    },
  ];

  const handleToggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleToggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleToggleDepartment = (dept: string) => {
    setSelectedDepartments(prev =>
      prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept]
    );
  };

  const handleReset = () => {
    setSelectedSkills([]);
    setSelectedCategories([]);
    setSelectedDepartments([]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Filter Sidebar */}
        <aside className="w-[25%] bg-white border border-[#E5E7EB] rounded-lg p-6 h-fit sticky top-24">
          <h2 className="text-[#1A1A1A] mb-6">Filter Pencarian</h2>

          {/* Skills Filter */}
          <div className="mb-6">
            <h3 className="text-[#1A1A1A] mb-3">Keahlian (Skills)</h3>
            <ScrollArea className="h-[200px] pr-4">
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox
                      id={`skill-${skill}`}
                      checked={selectedSkills.includes(skill)}
                      onCheckedChange={() => handleToggleSkill(skill)}
                    />
                    <Label
                      htmlFor={`skill-${skill}`}
                      className="text-[#6B7280] cursor-pointer"
                    >
                      {skill}
                    </Label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <Separator className="my-6" />

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-[#1A1A1A] mb-3">Kategori Proyek</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleToggleCategory(category)}
                  />
                  <Label
                    htmlFor={`category-${category}`}
                    className="text-[#6B7280] cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Department Filter */}
          <div className="mb-6">
            <h3 className="text-[#1A1A1A] mb-3">Jurusan Terkait</h3>
            <div className="space-y-3">
              {departments.map((dept) => (
                <div key={dept} className="flex items-center space-x-2">
                  <Checkbox
                    id={`dept-${dept}`}
                    checked={selectedDepartments.includes(dept)}
                    onCheckedChange={() => handleToggleDepartment(dept)}
                  />
                  <Label
                    htmlFor={`dept-${dept}`}
                    className="text-[#6B7280] cursor-pointer"
                  >
                    {dept}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full bg-[#0052A3] hover:bg-[#003D82]">
              Terapkan Filter
            </Button>
            <Button
              variant="outline"
              className="w-full border-[#E5E7EB]"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          <div className="max-w-[1200px]">
            <h1 className="text-[#1A1A1A] mb-2">Hasil Pencarian</h1>
            <p className="text-[#6B7280] mb-8">
              Menampilkan {mockProjects.length} dari 80 proyek
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  onClick={onProjectClick}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}