import Link from "next/link";

interface MenuItemProps {
  href: string;
  currentPath: string;
  className: string;
  icon: JSX.Element;
}

const MenuItem = (props: MenuItemProps) => {
  const { href, currentPath, className, icon } = props;
  return (
    <Link href={href} className={className}>
      <div
        className={`py-1 px-2 flex items-center`}
        style={{
          background: currentPath === href ? "linear-gradient(45deg, #e52e71, #ff8a00)" : "",
          transform: currentPath === href ? "scale(1.05)" : "",
          color: currentPath === href ? "white" : "",
          transition: "0.2s",
        }}
      >
        {icon}
      </div>
    </Link>
  );
};

export { MenuItem };
