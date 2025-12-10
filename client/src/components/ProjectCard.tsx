import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tag } from './Tag';
import { Button } from './ui/button';
import { Users, Clock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  owner: string;
  ownerAvatar: string;
  description: string;
  skills: string[];
  members: number;
  timePosted: string;
  thumbnail?: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  owner,
  ownerAvatar,
  description,
  skills,
  members,
  timePosted,
  thumbnail,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {thumbnail && (
        <div className="w-full h-48 bg-gray-200">
          <ImageWithFallback
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-[#1A1A1A] mb-2">{title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <ImageWithFallback
            src={ownerAvatar}
            alt={owner}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-[#6B7280]">{owner}</span>
        </div>
        <p className="text-[#6B7280] mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.slice(0, 3).map((skill, index) => (
            <Tag key={index} variant="primary">
              {skill}
            </Tag>
          ))}
          {skills.length > 3 && (
            <Tag variant="default">+{skills.length - 3}</Tag>
          )}
        </div>
        <div className="flex items-center justify-between text-[#6B7280]">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{members} anggota</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{timePosted}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
