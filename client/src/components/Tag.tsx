interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'skill';
}

export function Tag({ children, variant = 'default' }: TagProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-700 border-gray-300',
    primary: 'bg-blue-50 text-[#0052A3] border-blue-200',
    success: 'bg-emerald-50 text-[#27AE60] border-emerald-200',
    skill: 'bg-blue-50 text-[#0052A3] border-blue-200',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full border ${variants[variant]}`}>
      {children}
    </span>
  );
}