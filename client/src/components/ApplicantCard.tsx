import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tag } from './Tag';
import { Button } from './ui/button';
import { CheckCircle, XCircle, Eye } from 'lucide-react';

interface ApplicantCardProps {
  name: string;
  avatar: string;
  headline: string;
  skills: string[];
  onViewProfile?: () => void;
  onAccept?: () => void;
  onReject?: () => void;
}

export function ApplicantCard({
  name,
  avatar,
  headline,
  skills,
  onViewProfile,
  onAccept,
  onReject,
}: ApplicantCardProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <ImageWithFallback
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-[#1A1A1A] mb-1">{name}</h3>
          <p className="text-[#6B7280]">{headline}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <Tag key={index} variant="primary">
            {skill}
          </Tag>
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={onViewProfile}
        >
          <Eye className="w-4 h-4 mr-2" />
          Lihat Profil
        </Button>
        <Button
          className="bg-red-600 hover:bg-red-700 text-white"
          onClick={onReject}
        >
          <XCircle className="w-4 h-4 mr-2" />
          Tolak
        </Button>
        <Button
          className="bg-green-600 hover:bg-green-700 text-white"
          onClick={onAccept}
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Terima
        </Button>
      </div>
    </div>
  );
}
