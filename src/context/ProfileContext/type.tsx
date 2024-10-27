import { BadgeProps } from "@/components/Badge";
export interface ProjectDetailModalProps {
  name: string;
  role?: string;
  projectTimeRange?: string;
  overview?: string;
  projectCardImageUrl?: string;
  imageUrls?: string[];
  description?: string[] | JSX.Element[];
  techologies?: BadgeProps[];
  projectUrl?: string;
  githubUrl? : string;
}
