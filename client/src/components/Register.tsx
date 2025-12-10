import { useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';

interface RegisterProps {
  onLoginClick?: () => void;
  onRegisterSuccess?: () => void;
}

export function Register({ onLoginClick, onRegisterSuccess }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isLecturer: false,
  });
  const [errors, setErrors] = useState({
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi password match
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Password tidak cocok' });
      return;
    }

    // Simulasi registrasi berhasil
    if (onRegisterSuccess) {
      onRegisterSuccess();
    }
  };

  const handleConfirmPasswordChange = (value: string) => {
    setFormData({ ...formData, confirmPassword: value });
    if (value && formData.password !== value) {
      setErrors({ confirmPassword: 'Password tidak cocok' });
    } else {
      setErrors({ confirmPassword: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0052A3] rounded-xl mb-4">
            <span className="text-white text-xl">PH</span>
          </div>
          <h1 className="text-[#1A1A1A]">ProjectHub</h1>
          <p className="text-[#6B7280] mt-2">Platform Kolaborasi Proyek Kampus</p>
        </div>

        {/* Register Card */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm">
          <h2 className="text-[#1A1A1A] mb-6">Buat Akun Baru</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-[#1A1A1A]">
                Nama Lengkap
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-gray-50 border-[#E5E7EB]"
                required
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1A1A1A]">
                Email Kampus
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="nama@kampus.ac.id"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-gray-50 border-[#E5E7EB]"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#1A1A1A]">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Minimal 8 karakter"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-gray-50 border-[#E5E7EB] pr-10"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1A1A1A]"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-[#1A1A1A]">
                Konfirmasi Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Ulangi password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  className={`bg-gray-50 border-[#E5E7EB] pr-10 ${
                    errors.confirmPassword ? 'border-red-500' : ''
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1A1A1A]"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{errors.confirmPassword}</span>
                </div>
              )}
            </div>

            {/* Lecturer Checkbox */}
            <div className="flex items-center gap-3 py-2">
              <Checkbox
                id="isLecturer"
                checked={formData.isLecturer}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isLecturer: checked as boolean })
                }
              />
              <Label
                htmlFor="isLecturer"
                className="text-[#1A1A1A] cursor-pointer"
              >
                Saya adalah Dosen
              </Label>
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              className="w-full bg-[#0052A3] hover:bg-[#003D82]"
            >
              Daftar
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-[#6B7280]">
              Sudah punya akun?{' '}
              <button
                onClick={onLoginClick}
                className="text-[#0052A3] hover:underline"
              >
                Login di sini
              </button>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-[#9CA3AF] mt-6">
          © 2024 ProjectHub. Platform untuk mahasiswa dan dosen.
        </p>
      </div>
    </div>
  );
}