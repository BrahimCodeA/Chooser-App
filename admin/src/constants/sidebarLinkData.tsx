import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineListAlt } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

export const sidebarLinks = [
  {
    to: "/add",
    icon: <CiCirclePlus />,
    title: "Ajoutez un produit",
  },
  {
    to: "/list",
    icon: <MdOutlineListAlt />,
    title: "Liste des produits",
  },
  {
    to: "/orders",
    icon: <GoChecklist />,
    title: "Commandes",
  },
];
