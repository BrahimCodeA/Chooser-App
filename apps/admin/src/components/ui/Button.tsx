type ButtonProps = {
  title: string | JSX.Element;
  onClick: () => void;
  className?: string;
};

export const Button = ({ title, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};
