import "./AuthMenu.scss";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { RxAvatar } from "react-icons/rx";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import AuthLinksButton from "../ui/AuthLinksButton";
import SignInModals from "../SignInModals/SignInModals";
import SignUpModals from "../SignUpModals/SignUpModals";
import { Link } from "react-router-dom";

type ModalType = "signIn" | "signUp" | null;

export default function AuthMenu() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  const openModal = (modalType: ModalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <div
        className="avatar-modals"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <RxAvatar className="user-icon" />
        {isHovered && (
          <div className="avatar-modals-links">
            <Link to="/profile">
              <button className="btn-account">
                Mon profil <VscAccount />
              </button>
            </Link>
            <AuthLinksButton
              title="Connexion"
              icon={<FaSignInAlt />}
              style="btn-signin"
              onClick={() => openModal("signIn")}
            />
            <AuthLinksButton
              title="Inscription"
              icon={<FaUserPlus />}
              style="btn-signup"
              onClick={() => openModal("signUp")}
            />
          </div>
        )}
      </div>

      {activeModal === "signIn" && (
        <SignInModals
          onClose={closeModal}
          openSignUp={() => openModal("signUp")}
        />
      )}
      {activeModal === "signUp" && (
        <SignUpModals
          onClose={closeModal}
          openSignIn={() => openModal("signIn")}
        />
      )}
    </>
  );
}
