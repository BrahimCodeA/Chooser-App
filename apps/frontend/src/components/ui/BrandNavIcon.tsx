import { BrandNavbarProps } from "../../types/brandNavbar";

export default function BrandNavIcon({
  brandIcon,
  brandName,
}: BrandNavbarProps) {
  return (
    <li className="brand">
      {brandIcon} {brandName}
    </li>
  );
}
