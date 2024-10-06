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
  return (
    <div
      className="flex items-center gap-3 p-1 px-3"
      style={{ backgroundColor: backgroundColor, border: border }}
    >
      {icon}
      <span className="text-sm" style={{ color: textColor }}>
        {" "}
        {title}{" "}
      </span>
    </div>
  );
};

export default Badge;
