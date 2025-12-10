import { useState } from 'react';
import { ArrowLeft, Upload, Eye, EyeOff, Trash2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tag } from './Tag';

interface SettingsProps {
  onBack?: () => void;
}

export function Settings({ onBack }: SettingsProps) {
  const [profileData, setProfileData] = useState({
    avatar: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=400',
    fullName: 'Ahmad Rizki',
    headline: 'Full Stack Developer | React & Node.js Enthusiast',
    skills: ['React', 'TypeScript', 'Node.js', 'UI/UX Design'],
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [notificationPrefs, setNotificationPrefs] = useState({
    emailOnNewApplicant: true,
    emailOnApplicationAccepted: true,
    emailOnComment: false,
    emailOnProjectUpdate: true,
  });

  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()],
      });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter((s) => s !== skill),
    });
  };

  const handleSaveProfile = () => {
    // Simulasi simpan profil
    alert('Profil berhasil diperbarui!');
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Password baru tidak cocok!');
      return;
    }
    // Simulasi ubah password
    alert('Password berhasil diubah!');
    setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleDeleteAccount = () => {
    // Simulasi hapus akun
    alert('Akun Anda akan dihapus dalam 30 hari. Anda dapat membatalkan dalam periode ini.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#1A1A1A] mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>
          <h2 className="text-[#1A1A1A]">Pengaturan Akun</h2>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm">
          <Tabs defaultValue="profile" className="w-full">
            <div className="border-b border-[#E5E7EB] px-6">
              <TabsList className="bg-transparent h-auto p-0">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#0052A3] rounded-none px-4 py-3"
                >
                  Profil
                </TabsTrigger>
                <TabsTrigger
                  value="account"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#0052A3] rounded-none px-4 py-3"
                >
                  Akun
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#0052A3] rounded-none px-4 py-3"
                >
                  Notifikasi
                </TabsTrigger>
                <TabsTrigger
                  value="privacy"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#0052A3] rounded-none px-4 py-3"
                >
                  Privasi & Keamanan
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab: Profil */}
            <TabsContent value="profile" className="p-6 space-y-6">
              {/* Foto Profil */}
              <div className="space-y-3">
                <Label className="text-[#1A1A1A]">Foto Profil</Label>
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={profileData.avatar}
                    alt="Profile Avatar"
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#E5E7EB]"
                  />
                  <Button variant="outline" className="border-[#E5E7EB]">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Foto Baru
                  </Button>
                </div>
              </div>

              {/* Nama Lengkap */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-[#1A1A1A]">
                  Nama Lengkap
                </Label>
                <Input
                  id="fullName"
                  value={profileData.fullName}
                  onChange={(e) =>
                    setProfileData({ ...profileData, fullName: e.target.value })
                  }
                  className="bg-gray-50 border-[#E5E7EB]"
                />
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <Label htmlFor="headline" className="text-[#1A1A1A]">
                  Headline (Bio Singkat)
                </Label>
                <Input
                  id="headline"
                  value={profileData.headline}
                  onChange={(e) =>
                    setProfileData({ ...profileData, headline: e.target.value })
                  }
                  className="bg-gray-50 border-[#E5E7EB]"
                  placeholder="Contoh: Full Stack Developer | React Enthusiast"
                />
              </div>

              {/* Keahlian Tags */}
              <div className="space-y-3">
                <Label className="text-[#1A1A1A]">Keahlian</Label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {profileData.skills.map((skill) => (
                    <div key={skill} className="inline-flex items-center gap-1">
                      <Tag variant="skill">{skill}</Tag>
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-[#6B7280] hover:text-red-600 p-1"
                        aria-label={`Remove ${skill}`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                    placeholder="Tambah keahlian baru"
                    className="bg-gray-50 border-[#E5E7EB]"
                  />
                  <Button
                    onClick={handleAddSkill}
                    variant="outline"
                    className="border-[#0052A3] text-[#0052A3]"
                  >
                    Tambah
                  </Button>
                </div>
              </div>

              <Button
                onClick={handleSaveProfile}
                className="bg-[#0052A3] hover:bg-[#003D82]"
              >
                Simpan Perubahan
              </Button>
            </TabsContent>

            {/* Tab: Akun */}
            <TabsContent value="account" className="p-6 space-y-6">
              {/* Email (Read-only) */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#1A1A1A]">
                  Email Kampus
                </Label>
                <Input
                  id="email"
                  value="ahmad.rizki@kampus.ac.id"
                  disabled
                  className="bg-gray-100 text-[#6B7280] border-[#E5E7EB]"
                />
                <p className="text-sm text-[#6B7280]">
                  Email tidak dapat diubah
                </p>
              </div>

              <div className="border-t border-[#E5E7EB] pt-6">
                <h3 className="text-[#1A1A1A] mb-4">Ubah Password</h3>
                <div className="space-y-4">
                  {/* Password Lama */}
                  <div className="space-y-2">
                    <Label htmlFor="oldPassword" className="text-[#1A1A1A]">
                      Password Lama
                    </Label>
                    <div className="relative">
                      <Input
                        id="oldPassword"
                        type={showPasswords.old ? 'text' : 'password'}
                        value={passwordData.oldPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            oldPassword: e.target.value,
                          })
                        }
                        className="bg-gray-50 border-[#E5E7EB] pr-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowPasswords({ ...showPasswords, old: !showPasswords.old })
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
                      >
                        {showPasswords.old ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Password Baru */}
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-[#1A1A1A]">
                      Password Baru
                    </Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showPasswords.new ? 'text' : 'password'}
                        value={passwordData.newPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            newPassword: e.target.value,
                          })
                        }
                        className="bg-gray-50 border-[#E5E7EB] pr-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowPasswords({ ...showPasswords, new: !showPasswords.new })
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
                      >
                        {showPasswords.new ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Konfirmasi Password Baru */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-[#1A1A1A]">
                      Konfirmasi Password Baru
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showPasswords.confirm ? 'text' : 'password'}
                        value={passwordData.confirmPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="bg-gray-50 border-[#E5E7EB] pr-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowPasswords({
                            ...showPasswords,
                            confirm: !showPasswords.confirm,
                          })
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
                      >
                        {showPasswords.confirm ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <Button
                    onClick={handleChangePassword}
                    className="bg-[#0052A3] hover:bg-[#003D82]"
                  >
                    Ubah Password
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Tab: Notifikasi */}
            <TabsContent value="notifications" className="p-6 space-y-4">
              <p className="text-[#6B7280] mb-6">
                Atur preferensi notifikasi email Anda
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 py-2">
                  <Checkbox
                    id="notif1"
                    checked={notificationPrefs.emailOnNewApplicant}
                    onCheckedChange={(checked) =>
                      setNotificationPrefs({
                        ...notificationPrefs,
                        emailOnNewApplicant: checked as boolean,
                      })
                    }
                  />
                  <Label htmlFor="notif1" className="text-[#1A1A1A] cursor-pointer">
                    Email saya jika ada pelamar baru
                  </Label>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <Checkbox
                    id="notif2"
                    checked={notificationPrefs.emailOnApplicationAccepted}
                    onCheckedChange={(checked) =>
                      setNotificationPrefs({
                        ...notificationPrefs,
                        emailOnApplicationAccepted: checked as boolean,
                      })
                    }
                  />
                  <Label htmlFor="notif2" className="text-[#1A1A1A] cursor-pointer">
                    Email saya jika lamaran saya diterima
                  </Label>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <Checkbox
                    id="notif3"
                    checked={notificationPrefs.emailOnComment}
                    onCheckedChange={(checked) =>
                      setNotificationPrefs({
                        ...notificationPrefs,
                        emailOnComment: checked as boolean,
                      })
                    }
                  />
                  <Label htmlFor="notif3" className="text-[#1A1A1A] cursor-pointer">
                    Email saya jika ada komentar baru
                  </Label>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <Checkbox
                    id="notif4"
                    checked={notificationPrefs.emailOnProjectUpdate}
                    onCheckedChange={(checked) =>
                      setNotificationPrefs({
                        ...notificationPrefs,
                        emailOnProjectUpdate: checked as boolean,
                      })
                    }
                  />
                  <Label htmlFor="notif4" className="text-[#1A1A1A] cursor-pointer">
                    Email saya untuk pembaruan proyek
                  </Label>
                </div>
              </div>

              <Button className="bg-[#0052A3] hover:bg-[#003D82] mt-6">
                Simpan Preferensi
              </Button>
            </TabsContent>

            {/* Tab: Privasi & Keamanan */}
            <TabsContent value="privacy" className="p-6 space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-red-900 mb-2">Zona Bahaya</h3>
                <p className="text-red-700 mb-4">
                  Tindakan ini tidak dapat dibatalkan. Harap pertimbangkan dengan
                  hati-hati.
                </p>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Hapus Akun
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Tindakan ini akan menghapus akun Anda secara permanen beserta
                        semua data yang terkait. Anda memiliki waktu 30 hari untuk
                        membatalkan penghapusan sebelum akun dihapus secara permanen.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Batal</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDeleteAccount}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Ya, Hapus Akun Saya
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}