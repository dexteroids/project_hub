import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ApplicantCard } from './ApplicantCard';
import { Users, Calendar, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Project {
  id: string;
  title: string;
  status: 'recruiting' | 'ongoing' | 'closed';
  applicantsCount: number;
  membersCount: number;
  createdDate: string;
  roles: {
    name: string;
    needed: number;
    filled: number;
    applicants: Array<{
      name: string;
      avatar: string;
      headline: string;
      skills: string[];
    }>;
  }[];
}

export function MyProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const myProjects: Project[] = [
    {
      id: '1',
      title: 'Platform E-Learning Berbasis AI',
      status: 'recruiting',
      applicantsCount: 8,
      membersCount: 3,
      createdDate: '15 Oktober 2024',
      roles: [
        {
          name: 'UI/UX Designer',
          needed: 2,
          filled: 1,
          applicants: [
            {
              name: 'Sarah Johnson',
              avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
              headline: 'Mahasiswa DKV \'22 | UI/UX Enthusiast',
              skills: ['Figma', 'UI/UX Design', 'Prototyping'],
            },
            {
              name: 'Michael Chen',
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
              headline: 'Mahasiswa Informatika \'21 | Design Lover',
              skills: ['Adobe XD', 'UI/UX Design', 'Illustration'],
            },
            {
              name: 'Lisa Anderson',
              avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
              headline: 'Mahasiswa DKV \'23 | Product Designer',
              skills: ['Figma', 'UI/UX Design', 'User Research'],
            },
          ],
        },
        {
          name: 'Back-End Developer',
          needed: 2,
          filled: 0,
          applicants: [
            {
              name: 'David Park',
              avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
              headline: 'Mahasiswa Informatika \'22 | Backend Engineer',
              skills: ['Node.js', 'Python', 'PostgreSQL'],
            },
            {
              name: 'Kevin Tan',
              avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100',
              headline: 'Mahasiswa Sistem Informasi \'21',
              skills: ['Java', 'Spring Boot', 'MySQL'],
            },
            {
              name: 'Ryan Abdullah',
              avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
              headline: 'Mahasiswa Informatika \'22 | Full-Stack Dev',
              skills: ['Node.js', 'Express', 'MongoDB'],
            },
          ],
        },
        {
          name: 'Machine Learning Engineer',
          needed: 1,
          filled: 0,
          applicants: [
            {
              name: 'Jessica Martinez',
              avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
              headline: 'Mahasiswa Informatika \'21 | AI Enthusiast',
              skills: ['Python', 'TensorFlow', 'Machine Learning'],
            },
            {
              name: 'Daniel Kim',
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
              headline: 'Mahasiswa Teknik Elektro \'22',
              skills: ['Python', 'PyTorch', 'Data Science'],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'Aplikasi Mobile Manajemen Kampus',
      status: 'ongoing',
      applicantsCount: 3,
      membersCount: 5,
      createdDate: '8 Oktober 2024',
      roles: [
        {
          name: 'Mobile Developer',
          needed: 1,
          filled: 2,
          applicants: [
            {
              name: 'Ahmad Pratama',
              avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100',
              headline: 'Mahasiswa Informatika \'22 | Flutter Dev',
              skills: ['Flutter', 'Dart', 'Mobile Development'],
            },
            {
              name: 'Siti Nurhaliza',
              avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
              headline: 'Mahasiswa Sistem Informasi \'23',
              skills: ['React Native', 'JavaScript', 'Mobile Apps'],
            },
            {
              name: 'Budi Santoso',
              avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
              headline: 'Mahasiswa Informatika \'21 | Android Dev',
              skills: ['Kotlin', 'Android', 'Java'],
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'Website Portfolio Mahasiswa Kreatif',
      status: 'closed',
      applicantsCount: 0,
      membersCount: 4,
      createdDate: '1 Oktober 2024',
      roles: [],
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      recruiting: { label: 'Sedang Merekrut', className: 'bg-blue-100 text-blue-800' },
      ongoing: { label: 'Sedang Berjalan', className: 'bg-green-100 text-green-800' },
      closed: { label: 'Ditutup', className: 'bg-gray-100 text-gray-800' },
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const handleViewApplicants = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleAccept = (applicantName: string) => {
    toast.success(`${applicantName} berhasil diterima!`);
  };

  const handleReject = (applicantName: string) => {
    toast.error(`${applicantName} ditolak`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-[#1A1A1A] mb-2">Manajemen Proyek Saya</h1>
        <p className="text-[#6B7280] mb-8">
          Kelola proyek yang Anda buat dan review pelamar
        </p>

        <div className="space-y-6">
          {myProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.createdDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.membersCount} anggota
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(project.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {project.applicantsCount > 0 ? (
                  <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-[#FF9966]" />
                      <span className="text-[#1A1A1A]">
                        <span className="text-[#FF9966]">{project.applicantsCount} Pelamar Baru</span> menunggu review Anda
                      </span>
                    </div>
                    <Button
                      className="bg-[#0052A3] hover:bg-[#003D82]"
                      onClick={() => handleViewApplicants(project)}
                    >
                      Lihat Pelamar
                    </Button>
                  </div>
                ) : (
                  <div className="p-4 bg-gray-50 border border-[#E5E7EB] rounded-lg text-center text-[#6B7280]">
                    Belum ada pelamar baru
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Applicants Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Pelamar untuk Proyek: {selectedProject?.title}</DialogTitle>
            <DialogDescription>
              Review dan kelola pelamar untuk setiap peran yang dibutuhkan
            </DialogDescription>
          </DialogHeader>

          {selectedProject && (
            <Tabs defaultValue={selectedProject.roles[0]?.name} className="mt-4">
              <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${selectedProject.roles.length}, 1fr)` }}>
                {selectedProject.roles.map((role) => (
                  <TabsTrigger key={role.name} value={role.name}>
                    {role.name} ({role.applicants.length})
                  </TabsTrigger>
                ))}
              </TabsList>

              {selectedProject.roles.map((role) => (
                <TabsContent key={role.name} value={role.name} className="space-y-4 mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-[#6B7280]">
                        Dibutuhkan: <span className="text-[#1A1A1A]">{role.needed} orang</span>
                      </p>
                      <p className="text-[#6B7280]">
                        Terisi: <span className="text-[#1A1A1A]">{role.filled} orang</span>
                      </p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {role.applicants.length} Pelamar
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {role.applicants.map((applicant, index) => (
                      <ApplicantCard
                        key={index}
                        {...applicant}
                        onViewProfile={() => toast.info(`Membuka profil ${applicant.name}`)}
                        onAccept={() => handleAccept(applicant.name)}
                        onReject={() => handleReject(applicant.name)}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}