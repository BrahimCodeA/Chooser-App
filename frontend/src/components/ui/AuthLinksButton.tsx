type AuthLinksButtonProps = {
  title: string;
  icon: React.ReactNode;
  style: string;
  onClick: () => void;
};

export default function AuthLinksButton({
  title,
  icon,
  style,
  onClick,
}: AuthLinksButtonProps) {
  return (
    <>
      <button className={style} onClick={onClick}>
        {title} {icon}
      </button>
    </>
  );
}
