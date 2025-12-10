import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tag } from './Tag';
import { Check, X, AlertCircle } from 'lucide-react';

export function StyleGuide() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-12">
        <h1 className="text-[#1A1A1A] mb-2">ProjectHub Design System</h1>
        <p className="text-[#6B7280] mb-12">Style Guide & Component Library</p>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-[#1A1A1A] mb-6">Colors (Warna)</h2>
          
          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-[#1A1A1A] mb-4">Primary (Utama)</h3>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="w-full h-24 bg-[#003D82] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Primary Navy</p>
                <p className="text-[#6B7280]">#003D82</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#0052A3] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Primary Blue</p>
                <p className="text-[#6B7280]">#0052A3</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#4A90B8] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Primary Light</p>
                <p className="text-[#6B7280]">#4A90B8</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#87BCDE] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Primary Lighter</p>
                <p className="text-[#6B7280]">#87BCDE</p>
              </div>
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-8">
            <h3 className="text-[#1A1A1A] mb-4">Accent (Aksen)</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="w-full h-24 bg-[#FF9966] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Accent Coral</p>
                <p className="text-[#6B7280]">#FF9966</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#FFB088] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Accent Light</p>
                <p className="text-[#6B7280]">#FFB088</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#F4D03F] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Accent Cream</p>
                <p className="text-[#6B7280]">#F4D03F</p>
              </div>
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-8">
            <h3 className="text-[#1A1A1A] mb-4">Neutral (Netral)</h3>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="w-full h-24 bg-[#1A1A1A] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Text Primary</p>
                <p className="text-[#6B7280]">#1A1A1A</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#6B7280] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Text Secondary</p>
                <p className="text-[#6B7280]">#6B7280</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Background</p>
                <p className="text-[#6B7280]">#FFFFFF</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#E5E7EB] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Border</p>
                <p className="text-[#6B7280]">#E5E7EB</p>
              </div>
            </div>
          </div>

          {/* System Colors */}
          <div className="mb-8">
            <h3 className="text-[#1A1A1A] mb-4">System (Sistem)</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="w-full h-24 bg-[#E74C3C] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Error (Coral Red)</p>
                <p className="text-[#6B7280]">#E74C3C</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#27AE60] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Success (Emerald)</p>
                <p className="text-[#6B7280]">#27AE60</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#F39C12] rounded-lg mb-2"></div>
                <p className="text-[#1A1A1A]">Warning (Gold)</p>
                <p className="text-[#6B7280]">#F39C12</p>
              </div>
            </div>
          </div>

          {/* Color Harmony Info */}
          <div className="bg-gradient-to-r from-[#003D82] via-[#4A90B8] to-[#FF9966] rounded-lg p-6 text-white shadow-lg">
            <h3 className="mb-2">Color Philosophy</h3>
            <p className="text-sm opacity-95">
              Palette ini menggunakan Navy Blue yang strong dan trustworthy, dikombinasikan dengan Steel Blue untuk approachability, 
              Coral Orange untuk warmth dan energy, serta Cream untuk touch of optimism. Kombinasi yang perfect untuk platform akademik yang professional namun friendly.
            </p>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-[#1A1A1A] mb-6">Typography (Font)</h2>
          
          <div className="mb-8">
            <h3 className="text-[#1A1A1A] mb-4">Headings (Poppins)</h3>
            <div className="space-y-4">
              <div>
                <h1 className="text-[#1A1A1A] mb-1">Heading 1 - 48px Bold</h1>
                <p className="text-[#6B7280]">Untuk judul utama halaman</p>
              </div>
              <div>
                <h2 className="text-[#1A1A1A] mb-1">Heading 2 - 36px Bold</h2>
                <p className="text-[#6B7280]">Untuk judul section</p>
              </div>
              <div>
                <h3 className="text-[#1A1A1A] mb-1">Heading 3 - 24px SemiBold</h3>
                <p className="text-[#6B7280]">Untuk sub-section</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#1A1A1A] mb-4">Body Text (Inter)</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#1A1A1A] mb-1">Body Large - 18px Regular</p>
                <p className="text-[#6B7280]">Untuk paragraf penting atau intro</p>
              </div>
              <div>
                <p className="text-[#1A1A1A] mb-1">Body Normal - 16px Regular</p>
                <p className="text-[#6B7280]">Untuk teks standar dan isi konten</p>
              </div>
              <div>
                <p className="text-[#6B7280]">Caption/Label - 14px Medium</p>
                <p className="text-[#6B7280]">Untuk label, caption, dan metadata</p>
              </div>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="mb-16">
          <h2 className="text-[#1A1A1A] mb-6">Components (Komponen)</h2>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-[#1A1A1A] mb-4">Buttons (Tombol)</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#6B7280] mb-3">Primary Button</p>
                <div className="flex gap-4">
                  <Button className="bg-[#0052A3] hover:bg-[#003D82]">Default</Button>
                  <Button className="bg-[#003D82]">Hover</Button>
                  <Button disabled className="bg-gray-300">Disabled</Button>
                </div>
              </div>
              <div>
                <p className="text-[#6B7280] mb-3">Secondary Button</p>
                <div className="flex gap-4">
                  <Button variant="outline" className="border-[#0052A3] text-[#0052A3] hover:bg-blue-50">Default</Button>
                  <Button variant="outline" className="border-[#0052A3] text-[#0052A3] bg-blue-50">Hover</Button>
                </div>
              </div>
              <div>
                <p className="text-[#6B7280] mb-3">Text Link</p>
                <a href="#" className="text-[#0052A3] hover:underline">Lihat Semua Proyek →</a>
              </div>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="mb-8">
            <h3 className="text-[#1A1A1A] mb-4">Form Inputs (Isian)</h3>
            <div className="space-y-4 max-w-md">
              <div>
                <p className="text-[#6B7280] mb-3">Text Field - Default</p>
                <Input placeholder="Masukkan nama proyek..." className="border-[#E5E7EB]" />
              </div>
              <div>
                <p className="text-[#6B7280] mb-3">Text Field - Focus</p>
                <Input placeholder="Typing..." className="border-[#0052A3] ring-2 ring-blue-100" />
              </div>
              <div>
                <p className="text-[#6B7280] mb-3">Text Field - Error</p>
                <div>
                  <Input placeholder="Email tidak valid" className="border-[#E74C3C]" />
                  <p className="text-[#E74C3C] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    Field ini harus diisi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-[#1A1A1A] mb-4">Tags (Keahlian)</h3>
            <div className="flex flex-wrap gap-2">
              <Tag variant="primary">Python</Tag>
              <Tag variant="primary">React</Tag>
              <Tag variant="primary">Figma</Tag>
              <Tag variant="default">UI/UX Design</Tag>
              <Tag variant="default">Marketing</Tag>
              <Tag variant="success">Machine Learning</Tag>
              <Tag variant="success">Data Science</Tag>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="mb-8">
            <h3 className="text-[#1A1A1A] mb-4">Status Indicators</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                <Check className="w-5 h-5 text-[#27AE60]" />
                <span className="text-[#27AE60]">Berhasil! Proyek telah dibuat</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <X className="w-5 h-5 text-[#E74C3C]" />
                <span className="text-[#E74C3C]">Gagal! Terjadi kesalahan</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-[#FF9966]" />
                <span className="text-[#FF9966]">Peringatan! Profil belum lengkap</span>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section>
          <h2 className="text-[#1A1A1A] mb-6">Spacing & Layout</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#1A1A1A] mb-4">Spacing Scale</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#0052A3]"></div>
                  <span className="text-[#6B7280]">4px - Extra Small</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#0052A3]"></div>
                  <span className="text-[#6B7280]">8px - Small</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-[#0052A3]"></div>
                  <span className="text-[#6B7280]">12px - Medium</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#0052A3]"></div>
                  <span className="text-[#6B7280]">16px - Large</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0052A3]"></div>
                  <span className="text-[#6B7280]">24px - Extra Large</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[#1A1A1A] mb-4">Border Radius</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0052A3] rounded"></div>
                  <span className="text-[#6B7280]">4px - Small</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0052A3] rounded-lg"></div>
                  <span className="text-[#6B7280]">8px - Medium</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0052A3] rounded-xl"></div>
                  <span className="text-[#6B7280]">12px - Large</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0052A3] rounded-full"></div>
                  <span className="text-[#6B7280]">Full - Circular</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}