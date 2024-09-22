import { SkillBadgeProps } from "./type";

const SkillBadge = (props: SkillBadgeProps) => {
  const { src, alt, popupMessage } = props;
  return <img src={src} alt={alt} />;
};

export { SkillBadge };
