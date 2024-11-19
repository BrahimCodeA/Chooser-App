type BrandNavIconProps = {
  brandIcon: JSX.Element;
  brandName: string;
};

export default function BrandNavIcon({
  brandIcon,
  brandName,
}: BrandNavIconProps) {
  return (
    <li className="brand">
      {brandIcon} {brandName}
    </li>
  );
}
