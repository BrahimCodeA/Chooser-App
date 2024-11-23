import { SiJordan, SiNike } from "react-icons/si";
import { LinkProps } from "../types/navbar";
import { BrandNavbarProps } from "../types/brandNavbar";

export const links: LinkProps[] = [
  { link: "/men", title: "Homme" },
  { link: "/women", title: "Femme" },
  { link: "/kid", title: "Enfant" },
];

export const brands: BrandNavbarProps[] = [
  { brandIcon: <SiJordan />, brandName: "Jordan" },
  { brandIcon: <SiNike />, brandName: "Nike" },
];
