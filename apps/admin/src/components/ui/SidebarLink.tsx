import { Link } from "react-router-dom";

type SidebarLinkProps = {
  to: string;
  className: string;
  onClick: () => void;
  icon: JSX.Element;
  title: string;
};

export const SidebarLink = ({
  to,
  className,
  onClick,
  icon,
  title,
}: SidebarLinkProps) => {
  return (
    <>
      <Link to={to} className={className} onClick={onClick}>
        <p className="sidebar-icon">
          {icon} {title}
        </p>
      </Link>
    </>
  );
};
