import { SkillBadgeProps } from "@/components/SkillBadge/type";

export interface ProjectDetailModalProps {
  name: string;
  role?: string;
  projectTimeRange?: string;
  overview?: string;
  projectCardImageUrl?: string;
  imageUrls?: string[];
  description?: string[];
  techologies?: SkillBadgeProps[];
  projectUrl?: string;
  githubUrl? : string;
}
