type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className="navbar-logout" onClick={onClick}>
      {title}
    </button>
  );
};
