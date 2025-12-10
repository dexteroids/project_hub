import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';

interface LoginProps {
  onRegisterClick?: () => void;
  onLoginSuccess?: () => void;
}

export function Login({ onRegisterClick, onLoginSuccess }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi login berhasil
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0052A3] rounded-xl mb-4">
            <span className="text-white text-xl">PH</span>
          </div>
          <h1 className="text-[#1A1A1A]">ProjectHub</h1>
          <p className="text-[#6B7280] mt-2">Platform Kolaborasi Proyek Kampus</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm">
          <h2 className="text-[#1A1A1A] mb-6">Selamat Datang Kembali</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1A1A1A]">
                Email Kampus
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="nama@kampus.ac.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border-[#E5E7EB] pr-10"
                  required
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

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="#"
                className="text-[#0052A3] hover:underline"
              >
                Lupa Password?
              </a>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-[#0052A3] hover:bg-[#003D82]"
            >
              Login
            </Button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-[#6B7280]">
              Belum punya akun?{' '}
              <button
                onClick={onRegisterClick}
                className="text-[#0052A3] hover:underline"
              >
                Daftar di sini
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