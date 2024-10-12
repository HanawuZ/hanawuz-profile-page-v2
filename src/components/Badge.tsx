import { redirect } from "next/navigation";

export interface BadgeProps {
  icon?: JSX.Element;
  title: string;
  link?: string;
  textColor?: string;
  backgroundColor?: string;
  border?: string;
}

const Badge = (props: BadgeProps) => {
  const {
    icon,
    title,
    link,
    textColor = "#000000",
    backgroundColor = "#ffffff",
    border = "1px solid #000000",
  } = props;

  const handleRedirect = () => {
    if (link) {
        window.location.href = link;
    }
  };
  return (
    <button
      className="flex items-center gap-3 p-1 px-3"
      style={{
        backgroundColor: backgroundColor,
        border: border,
        cursor: link ? "pointer" : "default",
        pointerEvents: link ? "auto" : "none",
      }}
      onClick={handleRedirect}
    >
      {icon}
      <span className="text-xs sm:text-sm" style={{ color: textColor }}>
        {" "}
        {title}{" "}
      </span>
    </button>
  );
};

export default Badge;
