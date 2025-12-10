import { useState } from 'react';
import { ArrowLeft, Plus, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Tag } from './Tag';

interface MobileCreateProjectProps {
  onBack?: () => void;
  onSuccess?: () => void;
}

export function MobileCreateProject({ onBack, onSuccess }: MobileCreateProjectProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    location: '',
  });

  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [roles, setRoles] = useState<{ title: string; slots: number }[]>([]);
  const [newRole, setNewRole] = useState({ title: '', slots: 1 });

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleAddRole = () => {
    if (newRole.title.trim()) {
      setRoles([...roles, newRole]);
      setNewRole({ title: '', slots: 1 });
    }
  };

  const handleRemoveRole = (index: number) => {
    setRoles(roles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // Simulasi submit
    if (onSuccess) {
      onSuccess();
    }
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
          <span className="text-[#1A1A1A]">Buat Proyek Baru</span>
          <div className="w-9"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Content - Scrollable */}
      <div className="px-4 py-4 pb-24 space-y-4">
        {/* Informasi Dasar */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-4">
          <h3 className="text-[#1A1A1A] mb-4">Informasi Dasar</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-[#1A1A1A]">
                Judul Proyek
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Contoh: Desain UI/UX Aplikasi Mobile"
                className="bg-gray-50 border-[#E5E7EB]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#1A1A1A]">
                Deskripsi
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Jelaskan detail proyek Anda..."
                rows={4}
                className="bg-gray-50 border-[#E5E7EB] resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline" className="text-[#1A1A1A]">
                Deadline
              </Label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="bg-gray-50 border-[#E5E7EB]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-[#1A1A1A]">
                Lokasi
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Contoh: Hybrid (Online & Kampus)"
                className="bg-gray-50 border-[#E5E7EB]"
              />
            </div>
          </div>
        </div>

        {/* Keahlian yang Dibutuhkan */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-4">
          <h3 className="text-[#1A1A1A] mb-4">Keahlian yang Dibutuhkan</h3>

          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {skills.map((skill) => (
                <div key={skill} className="inline-flex items-center gap-1">
                  <Tag variant="skill">{skill}</Tag>
                  <button
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-[#6B7280] hover:text-red-600 p-1"
                    aria-label={`Remove ${skill}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            <Input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
              placeholder="Tambah keahlian"
              className="bg-gray-50 border-[#E5E7EB] text-sm"
            />
            <Button
              onClick={handleAddSkill}
              size="sm"
              variant="outline"
              className="border-[#0052A3] text-[#0052A3] flex-shrink-0"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Posisi yang Dibutuhkan */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-4">
          <h3 className="text-[#1A1A1A] mb-4">Posisi yang Dibutuhkan</h3>

          {roles.length > 0 && (
            <div className="space-y-2 mb-4">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h4 className="text-[#1A1A1A]">{role.title}</h4>
                    <p className="text-[#6B7280] text-sm">{role.slots} slot</p>
                  </div>
                  <button
                    onClick={() => handleRemoveRole(index)}
                    className="p-2 hover:bg-gray-200 rounded-lg"
                  >
                    <X className="w-4 h-4 text-[#6B7280]" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-3">
            <Input
              value={newRole.title}
              onChange={(e) => setNewRole({ ...newRole, title: e.target.value })}
              placeholder="Nama posisi"
              className="bg-gray-50 border-[#E5E7EB] text-sm"
            />
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="slots" className="text-[#6B7280] text-sm mb-1 block">
                  Jumlah slot
                </Label>
                <Input
                  id="slots"
                  type="number"
                  min="1"
                  value={newRole.slots}
                  onChange={(e) =>
                    setNewRole({ ...newRole, slots: parseInt(e.target.value) || 1 })
                  }
                  className="bg-gray-50 border-[#E5E7EB] text-sm"
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={handleAddRole}
                  size="sm"
                  variant="outline"
                  className="border-[#0052A3] text-[#0052A3]"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Tambah
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 z-50">
        <Button
          onClick={handleSubmit}
          className="w-full bg-[#0052A3] hover:bg-[#003D82] h-12"
        >
          Publikasikan Proyek
        </Button>
      </div>
    </div>
  );
}