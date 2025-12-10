import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Plus, X } from 'lucide-react';
import { toast } from 'sonner';

interface Role {
  id: string;
  name: string;
  count: number;
  skills: string[];
}

export function CreateProject() {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectCategory, setProjectCategory] = useState('');
  const [roles, setRoles] = useState<Role[]>([
    { id: '1', name: '', count: 1, skills: [] }
  ]);

  const handleAddRole = () => {
    const newRole: Role = {
      id: Date.now().toString(),
      name: '',
      count: 1,
      skills: []
    };
    setRoles([...roles, newRole]);
  };

  const handleRemoveRole = (roleId: string) => {
    if (roles.length > 1) {
      setRoles(roles.filter(role => role.id !== roleId));
    }
  };

  const handleRoleChange = (roleId: string, field: keyof Role, value: any) => {
    setRoles(roles.map(role =>
      role.id === roleId ? { ...role, [field]: value } : role
    ));
  };

  const handleAddSkill = (roleId: string, skill: string) => {
    if (!skill.trim()) return;
    
    setRoles(roles.map(role =>
      role.id === roleId
        ? { ...role, skills: [...role.skills, skill] }
        : role
    ));
  };

  const handleRemoveSkill = (roleId: string, skillIndex: number) => {
    setRoles(roles.map(role =>
      role.id === roleId
        ? { ...role, skills: role.skills.filter((_, index) => index !== skillIndex) }
        : role
    ));
  };

  const handlePublish = () => {
    toast.success('Proyek berhasil dipublikasikan!');
  };

  const handleSaveDraft = () => {
    toast.success('Proyek berhasil disimpan sebagai draft!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-[#1A1A1A] mb-2">Publikasikan Proyek Baru Anda</h1>
        <p className="text-[#6B7280] mb-8">
          Lengkapi informasi proyek untuk menarik kolaborator terbaik
        </p>

        {/* Section 1: Basic Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Informasi Dasar</CardTitle>
            <CardDescription>Deskripsikan proyek Anda dengan jelas dan menarik</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Judul Proyek</Label>
              <Input
                id="title"
                placeholder="Contoh: Platform E-Learning Berbasis AI"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi Lengkap Proyek</Label>
              <Textarea
                id="description"
                placeholder="Jelaskan tujuan, fitur utama, dan dampak yang diharapkan dari proyek ini..."
                className="min-h-[150px]"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
              <p className="text-[#6B7280]">
                Minimal 100 karakter ({projectDescription.length}/100)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategori Proyek</Label>
              <Select value={projectCategory} onValueChange={setProjectCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori proyek" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="research">Riset Dosen</SelectItem>
                  <SelectItem value="competition">Lomba</SelectItem>
                  <SelectItem value="assignment">Tugas Kuliah</SelectItem>
                  <SelectItem value="fun">Fun Project</SelectItem>
                  <SelectItem value="startup">Startup Project</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Roles Needed */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Peran yang Dibutuhkan</CardTitle>
            <CardDescription>Tentukan peran dan keahlian yang Anda cari</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {roles.map((role, index) => (
              <div key={role.id} className="p-4 border border-[#E5E7EB] rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#1A1A1A]">Peran {index + 1}</h3>
                  {roles.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveRole(role.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`role-name-${role.id}`}>Nama Peran</Label>
                  <Input
                    id={`role-name-${role.id}`}
                    placeholder="Contoh: UI/UX Designer"
                    value={role.name}
                    onChange={(e) => handleRoleChange(role.id, 'name', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`role-count-${role.id}`}>Jumlah yang Dibutuhkan</Label>
                  <Input
                    id={`role-count-${role.id}`}
                    type="number"
                    min="1"
                    placeholder="2"
                    value={role.count}
                    onChange={(e) => handleRoleChange(role.id, 'count', parseInt(e.target.value) || 1)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Keahlian (Skills) untuk Peran Ini</Label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      placeholder="Ketik skill dan tekan Enter"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleAddSkill(role.id, (e.target as HTMLInputElement).value);
                          (e.target as HTMLInputElement).value = '';
                        }
                      }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-[#0052A3] border border-blue-200 rounded-full"
                      >
                        {skill}
                        <button
                          onClick={() => handleRemoveSkill(role.id, skillIndex)}
                          className="hover:text-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              onClick={handleAddRole}
              className="w-full border-dashed border-[#0052A3] text-[#0052A3] hover:bg-blue-50"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tambah Peran Lain
            </Button>
          </CardContent>
        </Card>

        {/* Section 3: Publish */}
        <Card>
          <CardHeader>
            <CardTitle>Publikasi</CardTitle>
            <CardDescription>Siap untuk mencari kolaborator?</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button
              className="flex-1 bg-[#0052A3] hover:bg-[#003D82]"
              onClick={handlePublish}
            >
              Publikasikan Proyek
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleSaveDraft}
            >
              Simpan sebagai Draft
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}