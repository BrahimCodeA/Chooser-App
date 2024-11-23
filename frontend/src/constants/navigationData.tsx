import { SiJordan, SiNike } from "react-icons/si";

type LinkProps = {
  link: string;
  title: string;
};

type BrandProps = {
  brandIcon: JSX.Element;
  brandName: string;
};

export const links: LinkProps[] = [
  { link: "/men", title: "Homme" },
  { link: "/women", title: "Femme" },
  { link: "/kid", title: "Enfant" },
];

export const brands: BrandProps[] = [
  { brandIcon: <SiJordan />, brandName: "Jordan" },
  { brandIcon: <SiNike />, brandName: "Nike" },
];
